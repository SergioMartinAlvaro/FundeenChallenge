import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _projectsService: ProjectsService) { }

  buttonText = "MÁS";
  isCropped:boolean = false;
  projects;
  ngOnInit(): void {
    setTimeout(function() {
      document.getElementById("img-bg").classList.remove("hiddenImg");
      document.getElementById("img-bg").classList.add("showImg");
      document.getElementById("showmore-btn").classList.remove("hiddenImg");
      document.getElementById("showmore-btn").classList.add("showImg");
    }, 1000)
    this.getProjects();
  }

  getProjects() {
    this._projectsService.getProjects().subscribe(data => {
      this.projects = data;
      console.log(data);
    })
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
