import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FadeOnScrollDirectiveDirective} from "../../../shared/directives/fade-on-scroll-directive.directive";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FadeOnScrollDirectiveDirective
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
