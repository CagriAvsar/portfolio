import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'HTML/CSS',
      image: './assets/imgs/htmlcss.png'
    },
    {
      name: 'JAVASCRIPT',
      image: './assets/imgs/javascript.png'
    },
    {
      name: 'ANGULAR',
      image: './assets/imgs/angular-icon.png'
    },
    {
      name: 'GIT',
      image: './assets/imgs/git-icon.png'
    },
    {
      name: 'REST-API',
      image: './assets/imgs/icons8-rest-api-80 2.png'
    },
    {
      name: 'SCRUM',
      image: './assets/imgs/scrum.png'
    },
    {
      name: 'DATABASES',
      image: './assets/imgs/database-5-48 (1).png'
    },
    {
      name: 'TEST AUTOMATION',
      image: './assets/imgs/icons8-test-lab-96 2.png'
    },
    {
      name: 'DESING THINKING',
      image: './assets/imgs/design.png'
    }
  ]

  filteredSkills = this.skills;



  constructor() { }


  ngOnInit(): void {
    
  }

  

}
