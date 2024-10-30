import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { NavigationItem } from '../navigation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  @Input() item!: NavigationItem;

}
