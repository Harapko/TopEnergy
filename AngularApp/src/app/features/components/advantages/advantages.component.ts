import {AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FadeOnScrollDirectiveDirective} from "../../../shared/directives/fade-on-scroll-directive.directive";

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FadeOnScrollDirectiveDirective
  ],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss'
})
export class AdvantagesComponent {}
