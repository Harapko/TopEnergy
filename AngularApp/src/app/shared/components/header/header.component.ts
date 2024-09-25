import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      let el = document.querySelector('.burger__wrapper');
      if(el)
        el.classList.remove('visible')
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });




    }
  }

  openBurger(){
    let element = document.querySelector('.burger__wrapper')

    if(element)
      element.classList.toggle('visible')

    let bo = document.querySelector('.burger__open')
    let bl = document.querySelector('.burger__logo')
    let bn = document.querySelector('.burger__nav')


    document.addEventListener('click', e => {
      if(e.target !== bo && e.target !== element && e.target !== bl && e.target !== bn) {
        if (element){
          element.classList.remove('visible')
        }
      }
      console.log(e.target)

    })

  }


}
