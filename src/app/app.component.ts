import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  NavigationEnd, NavigationStart, Router} from '@angular/router';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;
  
  pageTab:String[]=["home","about_me","form","projects","info"]
  /// Pour les flèches dynamiques
  shouldAnimateTop : boolean = false
  shouldAnimateBottom : boolean = false
  isVerticalScrollbarVisible = false;
  delay_arrow_seconds : number = 1
  /////////////
  scroll : number = 0
  constructor(private router: Router,
      private form:FormService) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.shouldAnimateTop = false
        this.shouldAnimateBottom = false
        setTimeout(() => {
        }, this.delay_arrow_seconds * 1000);
      }
    });
  }


  onMouseWheel(event: any) {
    const url:string = this.router.url.slice(1,this.router.url.length)
    const nb_wheel_mouse : number = 6
    if (event.deltaY > 0) {
      // Molette vers le bas
      if(this.scroll<0){
        this.scroll=0;
      }
      this.scroll+=event.deltaY
      if(url != this.pageTab[this.pageTab.length-1] && this.scroll>=nb_wheel_mouse*100){
        this.scroll=0
        if(url == "form" && this.form.portfolioFormIsEmpty() == false){

        }else{
          this.navigateAfterOrNot(url,true)
        }
      }
    } else if (event.deltaY < 0 ) {
      // Molette vers le haut
      if(this.scroll>0){
        this.scroll=0;
      }
      this.scroll+=event.deltaY
      if(url != this.pageTab[0]&& this.scroll<=nb_wheel_mouse*-100){
        this.scroll=0
        if(url == "form" && this.form.portfolioFormIsEmpty() == false){

        }else{
          this.navigateAfterOrNot(url,false)
        }
      }
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
      const mouseY = event.clientY;
      const windowHeight = window.innerHeight;
      const halfHeight = windowHeight / 2;
      const url:string = this.router.url.slice(1,this.router.url.length)
      const index : number = this.pageTab.indexOf(url)
      if(mouseY <= halfHeight){
        // Souris sur la partie supérieure
        if(index != 0){
          this.shouldAnimateTop=true
        }
        this.shouldAnimateBottom=false
      }else{
        // Souris sur la partie inférieure
        this.shouldAnimateTop=false
        if(index != this.pageTab.length-1){
          this.shouldAnimateBottom=true 
        }
      }
    
  }


  navigateAfterOrNot(path:String,after:boolean){
    const index : number = this.pageTab.indexOf(path)
    if(after){
      this.router.navigate([this.pageTab[index+1]])
    }else{
      this.router.navigate([this.pageTab[index-1]])
    }
  }
  navigateAfterOrNotButton(after:boolean){
    const url:string = this.router.url.slice(1,this.router.url.length)
    const index : number = this.pageTab.indexOf(url)
    if(after){
      if(index != this.pageTab.length-1){
        this.router.navigate([this.pageTab[index+1]])
      }else{
        console.error("Vous êtes à la dernière page");
      }
    }else{
      if(index != 0){
        this.router.navigate([this.pageTab[index-1]])
      }else{
        console.error("Vous êtes à la première page");
      }
    }
  }



}
