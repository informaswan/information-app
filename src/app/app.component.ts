import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLoanCalcsComponent } from './informaswan-pages/home-owners/home-loan-calcs/home-loan-calcs.component';
import { HeaderComponent } from './informaswan-pages/common/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeLoanCalcsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'informaswan';
}
