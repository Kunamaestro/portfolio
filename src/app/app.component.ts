import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  pageTab:String[]=["home","about_me","curriculum","form","projects","info"]

  previousScrollPosition = window.pageYOffset;
  scroll : number = 0
  constructor(private router: Router) { }

  // @HostListener("window:scroll")
  // onScroll(){
  //   if(this.scrollable==false){
  //     return ;
  //   }
  //   const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  //   if(currentScrollPosition!=this.previousScrollPosition){
  //     console.log("previous",this.previousScrollPosition);
  //     console.log("current",currentScrollPosition);
  //     const url:string = this.router.url.slice(1,this.router.url.length)
  //     const index : number = this.pageTab.indexOf(url)
  //     if (currentScrollPosition > this.previousScrollPosition +3) {
  //       this.previousScrollPosition=currentScrollPosition
  //       if(url != this.pageTab[this.pageTab.length-1]){
  //         this.router.navigate([this.pageTab[index+1]])
  //       }
  //     } else if (currentScrollPosition < this.previousScrollPosition -3){
  //       this.previousScrollPosition=currentScrollPosition
  //       if(url != this.pageTab[0]){
  //         this.router.navigate([this.pageTab[index-1]])
  //       }
  //     }
      
  //   }
  // }

  onMouseWheel(event: any) {
    const url:string = this.router.url.slice(1,this.router.url.length)
    const index : number = this.pageTab.indexOf(url)
    if (event.deltaY > 0) {
      if(this.scroll<0){
        this.scroll=0;
      }
      this.scroll+=event.deltaY
      if(url != this.pageTab[this.pageTab.length-1] && this.scroll>=400){
        this.scroll=0
        this.router.navigate([this.pageTab[index+1]])
      }
    } else if (event.deltaY < 0 ) {
      if(this.scroll>0){
        this.scroll=0;
      }
      this.scroll+=event.deltaY
      // Molette vers le haut
      if(url != this.pageTab[0]&& this.scroll<=-400){
        this.scroll=0
        this.router.navigate([this.pageTab[index-1]])
      }
    }
  }

}
