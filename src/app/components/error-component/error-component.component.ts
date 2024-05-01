import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.css'
})
export class ErrorComponentComponent {

}
