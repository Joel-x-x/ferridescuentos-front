import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navigation, NavigationItem } from '../navigation';
import { ItemComponent } from './item/item.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CategoryComponent } from './category/category.component';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [NgClass, RouterLink, ItemComponent, DropdownComponent, CategoryComponent, CategoryComponent, DarkModeToggleComponent],
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
