import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  maxWidth!: number;

  ngOnInit() {
    // Get the maximum screen width
    this.maxWidth = window.innerWidth;
  }
}

