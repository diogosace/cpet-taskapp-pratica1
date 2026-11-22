import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  standalone: true,
})
export class DestaqueDirective {
  @Input() corDestaque = '#fff3b0';
  private ativo = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('click')
  alternar() {
    this.ativo = !this.ativo;
    this.el.nativeElement.style.backgroundColor = this.ativo
      ? this.corDestaque
      : '';
  }
}