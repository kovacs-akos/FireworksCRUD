import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FireworkModel } from '../models/firework-model';

@Component({
  selector: 'app-fire-w',
  standalone: true,
  imports: [],
  templateUrl: './fire-w.component.html',
  styleUrl: './fire-w.component.css',
})
export class FireWComponent {
  @Input() model: FireworkModel | undefined = undefined;
  @Output() saveEvent = new EventEmitter<FireworkModel>();

  getValue(event: any): string{
    return event.target.value;
  }

  getNumberValue(event: any): number{
    return Number(event.target.value);
  }

  save(){
    this.saveEvent.emit(this.model);
  }
}
