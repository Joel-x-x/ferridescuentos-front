import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '../../navigation';
import { NgClass } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [RouterLink, NgClass, ItemComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
@Input() item!: NavigationItem;
}
