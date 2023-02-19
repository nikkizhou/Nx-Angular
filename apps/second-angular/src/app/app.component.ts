import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'first-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'second-angular';
  intervalSub:any

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('hello from interval');
    },1000)
  }

  ngOnDestroy(): void {
      this.intervalSub && clearInterval(this.intervalSub)
  }

  getThree() {
    return 3;
  }
}
