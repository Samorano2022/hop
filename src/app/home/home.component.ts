import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor (private router:Router){
  var menu = document.getElementsByClassName('header__desktop');
  const hamburger = document.getElementsByClassName('hamburger')
  const header = document.getElementsByClassName('header__mobile')
  const header__wrapper = document.getElementsByClassName('header__wrapper')
  let hamburgerr: HTMLImageElement[];
  
  
    const openmenu =() => {
      menu[0].classList.toggle('active')
      if(menu[0].className.includes('active')){
          hamburgerr[0].src = '/assets/cancel__icon.svg'
      }
      else{
          hamburgerr[0].src = '/assets/hamburger.svg'
      }
  
    }
  
  window.addEventListener('scroll', (e)=> {
      if(window.scrollY > 0){
          header[0].classList.add('header__bar')
          header__wrapper[0].classList.add('header__bar')
      }
      else{
          header[0].classList.remove('header__bar')
          header__wrapper[0].classList.remove('header__bar')
  
      }
    
  }
  )
 }
}
