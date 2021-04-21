import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() imgAds;
  slideIndex = 1;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);

    setInterval(() => {
      this.slideIndex++;
      this.showSlides(this.slideIndex);
    }, 3000);
  }

  plusSlides(n: number) {
    this.slideIndex += n
    this.showSlides(this.slideIndex);
  }

  showSlides(n: number) {
    const slides = this.elementRef.nativeElement.querySelectorAll('.mySlides');

    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[this.slideIndex - 1].style.display = "block";
  }
}
