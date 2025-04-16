import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {
  logoPath = 'assets/images/logo.png';
  
  // onSearch(event: any) {
  //   const query = event.target.value;
  //   console.log('Search:', query); 
  // }

}
