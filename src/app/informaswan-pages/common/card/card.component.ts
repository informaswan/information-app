import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() backgroundImage: string | undefined;
  @Input() content: string | undefined;
  @Input() route: string | undefined;

  constructor(private router: Router) {}
  onCardClick(){
    if (this.route) {
      this.router.navigate([this.route]); // Navigate to the specified route
    }
  }
}