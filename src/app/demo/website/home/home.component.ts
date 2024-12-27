import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { BurgerComponent } from '../navigation/burger/burger.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, BurgerComponent, SliderComponent, CarouselComponent, CardActionsComponent, SchedulesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
