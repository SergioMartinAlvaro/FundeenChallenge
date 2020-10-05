import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Project } from '../models/project';
const CACHE_KEY = "projectsCacheKey"

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects;
  constructor(private http: HttpClient) {

  }


  getProjects(): Observable<Project> {
    let transactionsURL = '/api/projects';
    let options = {};
    this.projects = this.http.get(transactionsURL, options).pipe(
      map(data => data));
    this.projects.subscribe(next => {
      localStorage[CACHE_KEY] = JSON.stringify(next);
    })

    this.projects = this.projects.pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || ''))
    )
    return this.projects;
  }
}
