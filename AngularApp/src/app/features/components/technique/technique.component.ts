import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-technique',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './technique.component.html',
  styleUrl: './technique.component.scss'
})
export class TechniqueComponent {

}
