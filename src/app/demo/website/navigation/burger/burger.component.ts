import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navigation, NavigationItem } from '../navigation';
import { ItemComponent } from './item/item.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [NgClass, RouterLink, ItemComponent, DropdownComponent, CategoryComponent, CategoryComponent],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss'
})
export class BurgerComponent {
  // ➤ Variables
  show: boolean = false;
  isActive: boolean = false;
  @Input() item!: NavigationItem;
  isCollapsed = false;
  public navigationItems: NavigationItem[] = [];

  // ➤ Init
  constructor(private navigation: Navigation) { }

  ngOnInit(): void {
    this.navigationItems = this.navigation.getNavigationItems();
  }


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMenu() {
    this.isActive = !this.isActive;
  }

}
