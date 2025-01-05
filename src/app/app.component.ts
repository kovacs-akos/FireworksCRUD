import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FireworkModel } from './models/firework-model';
import { DataService } from '../services/data.service';
import { FireWComponent } from './fire-w/fire-w.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FireWComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fireworks: FireworkModel[] = [];
  modify: FireworkModel | undefined = undefined;
  new: FireworkModel | undefined = undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getFireworks().subscribe({
      next: (data: FireworkModel[]) => {
        this.fireworks = data;
      },
      error: (err) => console.log(err),
    });
  }

  newFirework(){
    this.new = {
      id: undefined,
      name: '',
      category: '',
      price: 0,
      quantity: 0
    }
  }

  saveNew(firework: FireworkModel){
    this.dataService.addFirework(firework).subscribe({
      next: (data: FireworkModel) => {
        this.fireworks.push(data);
        this.new = undefined;
      },
      error: (err) => console.log(err),
    });
  }

  modifyFirework(firework: FireworkModel){
    this.modify = JSON.parse(JSON.stringify(firework));
  }

  saveModify(firework: FireworkModel){
    this.dataService.modifyFirework(firework).subscribe({
      next: (data: FireworkModel) => {
        const index = this.fireworks.findIndex((f) => f.id == data.id);
        this.fireworks[index] = data;
        this.modify = undefined;
      },
      error: (err) => console.log(err),
    });
  }

  deleteFirework(firework: FireworkModel){
    this.dataService.deleteFirework(firework).subscribe({
      next: (data: FireworkModel) => {
        const index = this.fireworks.findIndex((f) => f.id == data.id);
        this.fireworks.splice(index, 1);
      },
      error: (err) => console.log(err),
    });
  }


}
