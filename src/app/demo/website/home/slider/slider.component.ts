import { Component, ElementRef, QueryList, ViewChild, ViewChildren, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChildren('sliderItem') items!: QueryList<ElementRef>;
  @ViewChildren('dot') dots!: QueryList<ElementRef>;
  @ViewChild('nextButton') nextElement!: ElementRef;
  @ViewChild('sliderList') slider!: ElementRef;

  sliderObject = [
    {
      title: 'Title',
      text: 'lorem impusmsdkfljs dlslsl jkpqoe  sls qew.,e wekelorem impusmsdkfljs dlslsl jkpqoe  sls qew.,e wekelorem impusmsdkfljs dlslsl jkpqoe  sls qew.,e weke',
      image: '../../../../../assets/images/website/slider/1.jpg'
    },
    {
      title: 'Title',
      text: 'lorem impusmsdkfljs dlslsl jkpqoe  sls qew.,e weke',
      image: '../../../../../assets/images/website/slider/2.jpg'
    },
    {
      title: 'Title',
      text: 'lorem impusmsdkfljs dlslsl jkpqoe  sls qew.,e weke',
      image: '../../../../../assets/images/website/slider/3.jpg'
    },
    {
      title: 'Title',
      text: 'lorem impusmsdkfljs dlslsl jkpqoe  sls qew.,e weke',
      image: '../../../../../assets/images/website/slider/4.jpg'
    },
    {
      title: 'Title',
      text: 'lorem impusmsdkfljs dlslsl jkpqoe  sls qew.,e weke',
      image: '../../../../../assets/images/website/slider/5.jpg'
    },

  ];

  lengthItems = 0;
  active = 0;
  refreshInterval: any;

  ngAfterViewInit() {
    // We get the length after the views are available
    this.lengthItems = this.items.length - 1;

    // Configuration of refresh interval
    this.refreshInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    this.active = this.active + 1 <= this.lengthItems ? this.active + 1 : 0;
    this.reloadSlider();
  }

  prev() {
    this.active = this.active - 1 >= 0 ? this.active - 1 : this.lengthItems;
    this.reloadSlider();
  }

  setActive(index: number) {
    this.active = index;
    this.reloadSlider();
  }

  reloadSlider() {
    const itemsArray = this.items.toArray();
    if (itemsArray[this.active]) {
      this.slider.nativeElement.style.left = -itemsArray[this.active].nativeElement.offsetLeft + 'px';
    }

    // Restart interval
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    this.refreshInterval = setInterval(() => {
      this.next();
    }, 3000);
  }
}