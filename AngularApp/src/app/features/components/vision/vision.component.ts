import { Component } from '@angular/core';
import {FadeOnScrollDirectiveDirective} from "../../../shared/directives/fade-on-scroll-directive.directive";

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [
    FadeOnScrollDirectiveDirective
  ],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {

}
