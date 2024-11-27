import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { BurgerComponent } from '../navigation/burger/burger.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, BurgerComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
