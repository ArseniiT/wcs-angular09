import { Component, OnInit } from '@angular/core';
import { Cat } from './models/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cats: Cat[]= [];
  userCats: Cat [] = [];


  ngOnInit(): void {
      this.fillCatList();
  }

  fillCatList() {
    this.cats.push(new Cat('Whiskers', 'Siamese', new Date("2019-02-27"), 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format'));
    this.cats.push(new Cat('Mittens', 'Persian', new Date("2020-02-02"), 'https://www.thesprucepets.com/thmb/1Q3ZQVxADUQ2Aam4mhSS8FzqKP4=/2164x0/filters:no_upscale():strip_icc()/GettyImages-904624038-8a3d9763601742258dd48df05e1ce69f.jpg'));
    this.cats.push(new Cat('Boots', 'Maine Coon', new Date("2021-03-03"), 'https://www.eleveurs-online.com/data/eleveur/149/1600-148985.143.jpg'));
  }

  addCat(cat: Cat) {
    this.cats.unshift(cat);
  }

  addCatToUserCatList(i: any) {
    const tempCat = this.cats[i];
    console.log(tempCat)
    this.cats.splice(i, 1);
    this.userCats.push(tempCat);
    // this.userCats.unshift(tempCat);
  }

  removeUserCatById(i: number): void {
    const tempCat = this.userCats[i];
    console.log(tempCat)
    this.userCats.splice(i, 1);
    this.cats.unshift(tempCat);
  }
}
