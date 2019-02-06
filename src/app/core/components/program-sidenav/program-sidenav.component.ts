import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-sidenav',
  templateUrl: './program-sidenav.component.html',
  styleUrls: ['./program-sidenav.component.scss']
})
export class ProgramSidenavComponent implements OnInit {
  @Input() link: any;

  constructor() { }

  ngOnInit() {
  }

}
