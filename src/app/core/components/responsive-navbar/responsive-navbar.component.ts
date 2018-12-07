import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.scss']
})
export class ResponsiveNavbarComponent implements OnInit {
  showDropdown = false;
  @Input() dropdownLabel ;
  currentUser: any;

  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUserDetails();
  }
  openDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  onSignout()
  {
    return this.authService.getLogout();
  }

}
