import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { MapGoogleComponent } from '../home/map-google/map-google.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [NavigationComponent, MapGoogleComponent, FooterComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

}
