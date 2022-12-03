import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appInputResultsPainter]'
})
export class InputResultsPainterDirective implements OnChanges {
  @Input() strength!: string | null;

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.elRef.nativeElement.classList.contains('easy')) {
      this.onEasyChanges();
    }
    if (this.elRef.nativeElement.classList.contains('medium')) {
      this.onMediumChanges()
    }
    if (this.elRef.nativeElement.classList.contains('strong')) {
      this.onStrongChanges();
    }

  }

  onEasyChanges(): void {
    switch (this.strength) {
      case null:
        this.elRef.nativeElement.style.backgroundColor = 'lightgrey';
        break;
      case 'medium':
        this.elRef.nativeElement.style.backgroundColor = 'orange';
        break;
      case 'strong':
        this.elRef.nativeElement.style.backgroundColor = 'lightgreen';
        break;
      default:
        this.elRef.nativeElement.style.backgroundColor = 'red';

    }
  }

  onMediumChanges(): void {
    switch (this.strength) {
      case 'block':
        this.elRef.nativeElement.style.backgroundColor = 'red';
        break;
      case 'medium':
        this.elRef.nativeElement.style.backgroundColor = 'orange';
        break;
      case 'strong':
        this.elRef.nativeElement.style.backgroundColor = 'lightgreen';
        break;
      default:
        this.elRef.nativeElement.style.backgroundColor = 'lightgrey';
    }
  }

  onStrongChanges(): void {
    switch (this.strength) {
      case 'block':
        this.elRef.nativeElement.style.backgroundColor = 'red';
        break;
      case 'strong':
        this.elRef.nativeElement.style.backgroundColor = 'lightgreen';
        break;
      default:
        this.elRef.nativeElement.style.backgroundColor = 'lightgrey';
    }
  }

}
