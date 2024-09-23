import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FadeOnScrollDirectiveDirective} from "../../../shared/directives/fade-on-scroll-directive.directive";

@Component({
  selector: 'app-technique',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FadeOnScrollDirectiveDirective
  ],
  templateUrl: './technique.component.html',
  styleUrl: './technique.component.scss'
})
export class TechniqueComponent {

}
