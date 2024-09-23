import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFadeOnScrollDirective]',
  standalone: true
})
export class FadeOnScrollDirectiveDirective implements AfterViewInit {
  @Input() fadeCenterThreshold: number = 0.5;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.updateOpacity();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateOpacity();
  }

  private updateOpacity() {
    const windowHeight = window.innerHeight;
    const screenCenter = windowHeight / 2;
    const rect = this.el.nativeElement.getBoundingClientRect();

    const elementCenter = rect.top + rect.height / 2;
    const distanceToCenter = Math.abs(screenCenter - elementCenter);
    const maxDistance = windowHeight * this.fadeCenterThreshold;

    let opacity = 1 - distanceToCenter / maxDistance;
    opacity = Math.max(0, Math.min(opacity, 1));

    this.el.nativeElement.style.opacity = opacity.toString();
  }
}
