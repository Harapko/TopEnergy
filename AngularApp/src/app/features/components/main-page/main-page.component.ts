import { Component } from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {WelcomeComponent} from "../welcome/welcome.component";
import {AdvantagesComponent} from "../advantages/advantages.component";
import {EffectiveComponent} from "../effective/effective.component";
import {TechniqueComponent} from "../technique/technique.component";
import {VisionComponent} from "../vision/vision.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    BannerComponent,
    WelcomeComponent,
    AdvantagesComponent,
    EffectiveComponent,
    TechniqueComponent,
    VisionComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
