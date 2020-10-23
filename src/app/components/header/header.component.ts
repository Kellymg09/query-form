import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: any;
  isAdmin: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.logged = sessionStorage.getItem('user');
      this.isAdmin = JSON.parse(this.logged)?.roleId === 1;
    }, 4);
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
