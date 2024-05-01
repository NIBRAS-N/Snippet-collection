import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService:AuthService,private router:Router){}

  authServiceGetter(){
    return this.authService;
  }
  userLogout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
