import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'dropdown' | 'categories';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
}

@Injectable({
  providedIn: 'root',
})
export class Navigation {
  private NavigationItems: NavigationItem[] = [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: 'ti ti-smart-home'
    },
    {
      id: 'productos',
      title: 'Productos',
      type: 'dropdown',
      icon: 'ti ti-smart-home',
      url: '/productos',
      children: [
        {
          id: 'producto1',
          title: 'Producto 1',
          type: 'item',
          icon: 'ti ti-smart-home',
          url: '/producto1',
        },
        {
          id: 'producto2',
          title: 'Producto 2',
          type: 'item',
          icon: 'ti ti-smart-home',
          url: '/producto2',
        }
      ]
    },
    {
      id: 'servicios',
      title: 'Servicios',
      type: 'categories',
      icon: 'ti ti-smart-home',
      url: '/servicios',
      children: [
        {
          id: 'producto1',
          title: 'Producto 1',
          type: 'item',
          icon: 'ti ti-smart-home',
          url: '/producto1',
        },
        {
          id: 'producto2',
          title: 'Producto 2',
          type: 'item',
          icon: 'ti ti-smart-home',
          url: '/producto2',
        }
      ]
    },

    // {
    //   id: 'dashboard',
    //   title: 'Dashboard',
    //   type: 'group',
    //   icon: 'icon-NavigationItem',
    //   children: [
    //     {
    //       id: 'default',
    //       title: 'Dashboard',
    //       type: 'item',
    //       classes: 'nav-item',
    //       url: '/default',
    //       icon: 'ti ti-dashboard',
    //       breadcrumbs: false
    //     }
    //   ]
    // },
    // {
    //   id: 'page',
    //   title: 'Pages',
    //   type: 'group',
    //   icon: 'icon-NavigationItem',
    //   children: [
    //     {
    //       id: 'Authentication',
    //       title: 'Authentication',
    //       type: 'collapse',
    //       icon: 'ti ti-key',
    //       children: [
    //         {
    //           id: 'login',
    //           title: 'Login',
    //           type: 'item',
    //           url: '/guest/login',
    //           target: true,
    //           breadcrumbs: false
    //         },
    //         {
    //           id: 'register',
    //           title: 'Register',
    //           type: 'item',
    //           url: '/guest/register',
    //           target: true,
    //           breadcrumbs: false
    //         }
    //       ]
    //     }
    //   ]
    // },
    // Otros elementos del menú...
  ];

  getNavigationItems(): NavigationItem[] {
    return this.NavigationItems;
  }
}
