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
      image: './assets/imgs/htmlcss.png',
      description: 'The exciting journey into the world of software development began with Html and CSS. Logical, because a tree can also tip over in a light wind. The roots are important.',
      showDescription: false
    },
    {
      name: 'JAVASCRIPT',
      image: './assets/imgs/javascript.png',
      description: 'Then things got serious with JavaScript. The real programming has begun. I was introduced to functions, for loops, if queries, variables and much more. I also learned a lot about object-oriented programming(OOP).',
      showDescription: false
    },
    {
      name: 'ANGULAR',
      image: './assets/imgs/angular-icon.png',
      description: 'It was an uphill battle, but in the end it all worked out and JavaScript became my best friend. Everything took a different direction with Angular. With the framework, a lot has been made easier and the most complicated apps have been developed in a very short time',
      showDescription: false
    },
    {
      name: 'GIT',
      image: './assets/imgs/git-icon.png',
      description: 'With git and GitHub, my projects could be stored very well in the cloud. Above all, this technology was very helpful in the group work.',
      showDescription: false
    },
    {
      name: 'REST-API',
      image: './assets/imgs/icons8-rest-api-80 2.png',
      description: 'In today´s modern age, most applications are connected to the internet in some form. It was therefore essential to work with Rest API. In some projects I have learned how to carry out data transfer and work with the information obtained.',
      showDescription: false
    },
    {
      name: 'SCRUM',
      image: './assets/imgs/scrum.png',
      description: 'Scrum is a framework for team collaboration based on a definition of roles, meetings and tools that give a team structure and a clearly defined work process based on agile principles.',
      showDescription: false
    },
    {
      name: 'DATABASES',
      image: './assets/imgs/database-5-48 (1).png',
      description: 'Huge amounts of data are sent and received every day. Mostly it is important to very important data. You have to be very careful with this. So I also learned a lot about the important topic and how to work with large amounts of data.',
      showDescription: false
    },
    {
      name: 'TEST AUTOMATION',
      image: './assets/imgs/icons8-test-lab-96 2.png',
      description: '',
      showDescription: false
    },
    {
      name: 'DESING THINKING',
      image: './assets/imgs/design.png',
      description: '',
      showDescription: false
    }
  ]

  filteredSkills = this.skills;
  



  constructor() { }


  ngOnInit(): void {
    
  }

  

}
