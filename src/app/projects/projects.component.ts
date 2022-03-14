import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects : { name : string, img : string, description : string, url: string, category: string}[]  = [
    {
      name: 'El Pollo Loco',
      img: './assets/imgs/pollo-loco.png',
      description: 'I learned a lot about object-oriented programming with this Jump´n Run game. I learned how to create a complex project with different classes of clear functions and code.',
      url: 'http://cagri-avsar.developerakademie.com/modul11-el-pollo-loco/el-pollo-loco/index.html',
      category: 'Javascript'
    },
    {
      name: 'Canban Board',
      img: './assets/imgs/canban.PNG',
      description: 'Its easier to split up the work and keep track of things when others are working on the same project. With this group project, I not only had the experience of working with a Kanban Board, but also created one myself.',
      url: 'http://gruppe-114.developerakademie.net/Kanban%20Gruppenarbeit/addTask.html',
      category: 'Javascript'
    },
    {
      name: 'Pokedex',
      img: './assets/imgs/pokedex.png',
      description: 'Come catch`em all! With APIs it`s no longer a problem. In this project I learned to work with   interfaces and to work with the data from the APIs.',
      url: 'http://cagri-avsar.developerakademie.com/modul9/pokedex2/index.html',
      category: 'Javascript'
    },
    {
      name: 'Ring of Fire',
      img: './assets/imgs/ring-of-fire.png',
      description: 'A game that turns every party into an experience. Whether it`s with friends or family, pick a card and see what happens.',
      url: 'http://cagri-avsar.developerakademie.com/ringoffire/index.html',
      category: 'Angular'
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
