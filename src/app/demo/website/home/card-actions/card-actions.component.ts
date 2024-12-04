import { Component } from '@angular/core';

@Component({
  selector: 'app-card-actions',
  standalone: true,
  imports: [],
  templateUrl: './card-actions.component.html',
  styleUrl: './card-actions.component.scss'
})
export class CardActionsComponent {
  cards = [
    {
      title: "Cotizar",
      text: "Haz una cotización en línea.",
      image: "../../../../../assets/images/website/card-actions/cotizar.png",
    },
    {
      title: "Ferribot",
      text: "Chatea con nuestro bot y despeja todas tus dudas.",
      image: "../../../../../assets/images/website/card-actions/ferribot.png"
    }
  ];
}
