import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector:'[appHighlight]'
})

export class HighlightDirective{
  @Input() appHighlight = ''

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow'
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
