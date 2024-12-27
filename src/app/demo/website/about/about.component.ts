import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
