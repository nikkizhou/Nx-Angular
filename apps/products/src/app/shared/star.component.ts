import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating = 0
  cropWith = 75
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  ngOnChanges(): void{
    this.cropWith=this.rating*75/5
  }

  onClick() {
    this.ratingClicked.emit(`rating: ${this.rating}`)
  }


}
