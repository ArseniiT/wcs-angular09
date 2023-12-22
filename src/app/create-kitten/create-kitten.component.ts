import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {
  @Output() addNewCat = new EventEmitter<Cat>();
  newCatForm!: FormGroup;
  currentDate = new Date();
  minDate = new Date();
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.newCatForm = this.formBuilder.group({
      nom: [, [Validators.required]],
      race: [, [Validators.required]],
      birthday: [, [Validators.required, this.rangeDateValidator()]],
      imgUrl: []
    });

    this.newCatForm.valueChanges.subscribe(x => console.log(this.newCatForm.controls));

    this.minDate.setFullYear(this.minDate.getFullYear() - 40);
  }

  rangeDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const birthday = new Date(control.value);
      // check if birthday is less than minimum or greater than maximum
      if (birthday < this.minDate || birthday > this.currentDate) {
        return { 'ageLimit': { min: this.minDate, max: this.currentDate }};
      }
      return null;
    };
  };

  onSubmit(){
    this.submitted = true;
    console.log(this.newCatForm)
    if (this.newCatForm.invalid) {
      return;
    }

    let imgUrl = this.newCatForm.value['imgUrl']
    if (!imgUrl) {
      imgUrl = './assets/img/cat-no-img.jpg'
    }
    const cat = new Cat(
      this.newCatForm.value['nom'],
      this.newCatForm.value['race'],
      this.newCatForm.value['birthday'],
      imgUrl
    );
    this.newCatForm.reset();
    this.submitted = false;
    // this.cleanForm();
    this.addNewCat.emit(cat);

  }

  cleanForm(){
    this.newCatForm.get('nom')?.setValue('');
    this.newCatForm.get('race')?.setValue('');
    this.newCatForm.get('birthday')?.setValue('');
    this.newCatForm.get('imgUrl')?.setValue('');
  }

}
