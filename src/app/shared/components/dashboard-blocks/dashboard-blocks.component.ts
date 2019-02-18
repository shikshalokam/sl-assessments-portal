import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard-blocks',
  templateUrl: './dashboard-blocks.component.html',
  styleUrls: ['./dashboard-blocks.component.scss']
})
export class DashboardBlocksComponent implements OnInit {
 programId: string;
 assessmentId: string;

  constructor(private route : ActivatedRoute) { 
  }
  @Input() list: any;

   ngOnInit() {
   }

}
