import { Component } from '@angular/core';
import {FadeOnScrollDirectiveDirective} from "../../../shared/directives/fade-on-scroll-directive.directive";

@Component({
  selector: 'app-effective',
  standalone: true,
  imports: [
    FadeOnScrollDirectiveDirective
  ],
  templateUrl: './effective.component.html',
  styleUrl: './effective.component.scss'
})
export class EffectiveComponent {

}
