import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  buttonText = "MÁS";
  isCropped:boolean = false;

  ngOnInit(): void {
    setTimeout(function() {
      document.getElementById("img-bg").classList.remove("hiddenImg");
      document.getElementById("img-bg").classList.add("showImg");
      document.getElementById("showmore-btn").classList.remove("hiddenImg");
      document.getElementById("showmore-btn").classList.add("showImg");
    }, 1000)
  }

   reset_animation() {
    var el = document.getElementById('img-bg');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }

  crop() {
    if(this.buttonText == "MÁS") {
      this.buttonText = "MENOS";
    } else {
      this.buttonText = "MÁS"
    }
    this.isCropped = !this.isCropped;
  }
}
