import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../navigation';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
@Input() item!: NavigationItem;
}
