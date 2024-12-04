import { Component } from '@angular/core';
import { TitleSectionComponent } from "../title-section/title-section.component";

@Component({
  selector: 'app-map-google',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './map-google.component.html',
  styleUrl: './map-google.component.scss'
})
export class MapGoogleComponent {

}
