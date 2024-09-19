import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLoanCalcsComponent } from './informaswan-pages/home-owners/home-loan-calcs/home-loan-calcs.component';
import { LandingPageComponent } from './informaswan-pages/common/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeLoanCalcsComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'informaswan';
}
