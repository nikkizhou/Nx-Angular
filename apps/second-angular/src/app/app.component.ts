import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pet } from './modules/pet.module';

@Component({
  selector: 'first-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'second-angular';
  intervalSub: any
  showText: boolean = false
  todaysDate: Date = new Date()
  itemImageUrl: string = '../assets/photo.png'
  fontSizepx: number = 16
  species = ['fish', 'cat', 'dog']
  
  model = new Pet(1, 'Bob', this.species[0]);
  submitted = false;

  onSubmit() {
    this.submitted = true
  }
  
  toggleText(event:any) {
    this.showText = !this.showText
    console.log(event);
  }

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('hello from interval in app component');
    },10000)
  }

  ngOnDestroy(): void {
      this.intervalSub && clearInterval(this.intervalSub)
  }

  getThree() {
    return 3;
  }
}
