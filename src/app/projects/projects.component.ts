import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects : { name : string, img : string, description : string, url: string, hover: boolean, category: string}[]  = [
    {
      name: 'El Pollo Loco',
      img: 'assets/imgs/el_pollo_loco.png',
      description: 'I learned a lot about object-oriented programming with this Jump´n Run game. I learned how to create a complex project with different classes of clear functions and code.',
      url: 'http://cagri-avsar.developerakademie.com/modul11-el-pollo-loco/el-pollo-loco/index.html',
      category: 'Javascript',
      hover: false
    },
    {
      name: 'Weather Website',
      img: 'assets/imgs/weatherApp.png',
      description: 'Come rain or shine, the app will keep you in a good mood. Click in and don´t forget the umbrella',
      url: 'http://cagri-avsar.developerakademie.com/weather-website/',
      category: 'Angular',
      
      hover: false
    },
    {
      name: 'Pokedex',
      img: 'assets/imgs/pokomon.jpg',
      description: 'Come catch`em all! With APIs it`s no longer a problem. In this project I learned to work with   interfaces and to work with the data from the APIs.',
      url: 'http://cagri-avsar.developerakademie.com/poke-ng-dex/',
      category: 'Angular',
      hover: false
    },
    {
      name: 'Ring of Fire',
      img: 'assets/imgs/ringOfFire.png',
      description: 'A game that turns every party into an experience. Whether it`s with friends or family, pick a card and see what happens.',
      url: 'http://cagri-avsar.developerakademie.com/ringoffire/index.html',
      category: 'Angular',
      hover: false
    }
  ];


  constructor() { }

  ngOnInit(): void {
   
  }

  filteredProjects = this.projects;

  showProjects(category: string) {
    if (category !== 'all') {
      this.filteredProjects = this.projects.filter((p) => p.category === category); 
    } else {
      this.filteredProjects = this.projects;
    }
  }

}
