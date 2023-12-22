import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  @Input() cat!: Cat;
  @Input() catId!: number;
  @Output() adoptCat = new EventEmitter<number>();

  adopt(): void {
    this.adoptCat.emit(this.catId);
  }

}
