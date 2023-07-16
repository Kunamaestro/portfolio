import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }
  formContact :FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  isFormGroupEmpty(formGroup: FormGroup): boolean {
    let isEmpty = true;
    if(!this.formContact){
      return isEmpty
    }
    Object.keys(formGroup.controls).forEach(key => {
      const control: AbstractControl | null = formGroup.get(key);
      if (control && control.value) {
        isEmpty = false;
      }
    });

    return isEmpty;
  }

  portfolioFormIsEmpty() : boolean{
    return this.isFormGroupEmpty(this.formContact);
  }

}
