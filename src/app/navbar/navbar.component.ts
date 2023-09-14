import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [MenuModule, CommonModule,ButtonModule, RouterModule],
  standalone: true
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router){}
  ngOnInit(){
    this.items = [
      {
          label: 'Logout',
          icon: 'pi pi-power-off',
          command: () => {
            this.signout();
        }
      }];
  }

  signout(){
    this.router.navigate(['/login'])
  }
}
