import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild } from '@angular/core';
import { TitleSectionComponent } from '../title-section/title-section.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [TitleSectionComponent, NgClass],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss'
})
export class SchedulesComponent implements AfterViewInit {
  @ViewChild('schedule') scheduleContent : ElementRef;
  today: boolean;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.newDay();
  }

  ngAfterViewInit(): void {
    this.changeSchedule(); // Llamar a la función después de que la vista esté completamente inicializada
  }

  newDay(): void {
    const now  = new Date;
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const remainingTime = nextDay.getTime() - now.getTime();

    setInterval(() => {
      this.changeSchedule();

      // Change every day
      setTimeout(() => {
        this.changeSchedule();
      }, 24 * 60 * 60 * 1000); // Each 24 hours
    }, remainingTime);
  }

  changeSchedule(): void {
    const today  = (new Date).getDay();
    const days = this.scheduleContent.nativeElement.children;

    for (let i = 1; i < days.length; i++) {
      if(today === i) {
        this.renderer.addClass(days[i], 'today');
      }
    }

  }


}
