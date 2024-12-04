import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss'
})
export class TitleSectionComponent {
@Input() title!: String;
@Input() icon!: String;
// @Input() center!: boolean;

}
