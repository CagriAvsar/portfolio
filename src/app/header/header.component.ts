import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showFiller = false;
  headerScrolled:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }


  @HostListener('document:scroll')
  scroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerScrolled = true;
    }else {
      this.headerScrolled = false;
    }
  }

}

