import { NgClass } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.scss'
})
export class DarkModeToggleComponent {
  isSun: boolean = true;
  isAnimated: boolean = false;

  // Dark Mode
  isDarkMode: boolean = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.isSun = true;
      document.body.classList.add('darkmode');
    } else {
      this.isSun = false;
      document.body.classList.remove('darkmode');
    }
  }

  // Icon dark mode
  toggleIcon(): void {
    this.isSun = !this.isSun;
    this.isAnimated = true;


    setTimeout(() => {
      this.isAnimated = false;
    }, 700);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }

    // LocalStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }


}
