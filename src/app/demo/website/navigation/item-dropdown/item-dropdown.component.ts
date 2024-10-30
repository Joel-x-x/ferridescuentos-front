import { Component, Input } from '@angular/core';
import { NavigationItem } from '../navigation';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-dropdown',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './item-dropdown.component.html',
  styleUrl: './item-dropdown.component.scss'
})
export class ItemDropdownComponent {
  @Input() item!: NavigationItem;
}
