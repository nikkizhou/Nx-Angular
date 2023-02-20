import { Component, OnInit, OnDestroy } from '@angular/core';

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
  fontSizepx:number = 16
  
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
