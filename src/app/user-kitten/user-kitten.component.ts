import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {
  @Input() cat!: Cat;
  @Input() catId!: number;
  @Input() showInfo!: boolean;
  @Output() emitCatId: EventEmitter<number> = new EventEmitter();

  remove(): void {
    this.emitCatId.emit(this.catId);
  }
}
