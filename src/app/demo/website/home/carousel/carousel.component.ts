import { Component } from '@angular/core';
import { TitleSectionComponent } from "../title-section/title-section.component";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

// Minimun elements 7
export class CarouselComponent {
  images = [
    '../../../../../assets/images/website/carousel/disensa.jpeg',
    '../../../../../assets/images/website/carousel/adelca.png',
    '../../../../../assets/images/website/carousel/chimborazo.png',
    '../../../../../assets/images/website/carousel/fv.webp',
    '../../../../../assets/images/website/carousel/edesa.png',
    '../../../../../assets/images/website/carousel/holcim.png',
    '../../../../../assets/images/website/carousel/selvalegre.png',
  ];

}
