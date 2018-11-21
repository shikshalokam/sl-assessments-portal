import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
showDropdown = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/caret-symbol.svg'));
      iconRegistry.addSvgIcon(
        'help',
        sanitizer.bypassSecurityTrustResourceUrl('assets/info.svg'));
        iconRegistry.addSvgIcon(
          'creat',
          sanitizer.bypassSecurityTrustResourceUrl('assets/creat.svg'));
   }
  ngOnInit() {
  }
  myFunction() {
    if(this.showDropdown == true)
    {
      this.showDropdown = false;
    }
    else{
      this.showDropdown =true;
    }
  }

 
}


  
