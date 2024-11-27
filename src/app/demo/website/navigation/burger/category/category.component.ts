import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '../../navigation';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
@Input() item!: NavigationItem;
}
