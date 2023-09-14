import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, CarouselModule],

})
export class LandingPageComponent {

  products = [
    {
    "image": "https://f.nooncdn.com/mpcms/EN0001/assets/91d690d6-3629-4df7-a165-2ce194043bd5.png?format=avif",
    "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/93aa392d-dd69-47b6-ba3d-44218e0afeda.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/69592da0-c8fb-4d62-a96e-bbf6e3b0cc73.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/550de355-e3c5-4542-9b90-a8866d7196a6.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/91d690d6-3629-4df7-a165-2ce194043bd5.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/b46e1122-3f4a-4cd3-9400-e38067342d71.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/91d690d6-3629-4df7-a165-2ce194043bd5.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/91d690d6-3629-4df7-a165-2ce194043bd5.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/91d690d6-3629-4df7-a165-2ce194043bd5.png?format=avif",
      "name": "USB"
    },
    {
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/91d690d6-3629-4df7-a165-2ce194043bd5.png?format=avif",
      "name": "USB"
    },

  ];

}
