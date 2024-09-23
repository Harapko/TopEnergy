import { Component } from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {WelcomeComponent} from "../welcome/welcome.component";
import {AdvantagesComponent} from "../advantages/advantages.component";
import {EffectiveComponent} from "../effective/effective.component";
import {TechniqueComponent} from "../technique/technique.component";
import {VisionComponent} from "../vision/vision.component";
import {ChooseUsComponent} from "../choose-us/choose-us.component";
import {TeamComponent} from "../team/team.component";
import {ContactUsComponent} from "../contact-us/contact-us.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    BannerComponent,
    WelcomeComponent,
    AdvantagesComponent,
    EffectiveComponent,
    TechniqueComponent,
    VisionComponent,
    ChooseUsComponent,
    TeamComponent,
    ContactUsComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
