import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FadeOnScrollDirectiveDirective} from "../../../shared/directives/fade-on-scroll-directive.directive";

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FadeOnScrollDirectiveDirective
  ],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.scss'
})
export class ChooseUsComponent {

}
