import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex = 1;
  slides: any;

  constructor(
    private bootstrapModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n:any) {
    this.showSlides(this.slideIndex += n);
  }
  
  currentSlide(n:any) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n:any) {
    let i;
    this.slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > this.slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.slides.length }
    for (i = 0; i <this. slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    this.slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  donationModal() {
    const modalRef = this.bootstrapModal.open(ModalComponent, {});
  }
}
