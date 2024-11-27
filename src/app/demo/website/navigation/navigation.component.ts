import { Component, HostListener, OnInit } from '@angular/core';
import { Navigation } from './navigation';
import { NavigationItem } from './navigation';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, ItemComponent, ItemDropdownComponent, CategoriesComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {

  // ➤ Variables
  public navigationItems: NavigationItem[] = [];
  isFixed: boolean = false;
  lastScrollTop: number = 0;
  isHidden = false;
  isSidebarActive: boolean = false;

  // ➤ Init
  constructor(private navigation: Navigation) {}

  ngOnInit(): void {
    this.navigationItems = this.navigation.getNavigationItems();
  }


  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }


  // ➤ Función para manejar el scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = document.documentElement.scrollTop;

    // Si estamos haciendo scroll hacia abajo
    if (currentScroll > this.lastScrollTop && currentScroll > 129) {
      this.isHidden = true; // Oculta el navbar
    } else if (currentScroll < this.lastScrollTop) {
      this.isHidden = false; // Muestra el navbar
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
  }
}

