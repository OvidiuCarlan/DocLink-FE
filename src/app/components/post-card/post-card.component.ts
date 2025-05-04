import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post!: {
    title: string;
    content: string;
    category: string;
  };

  createAppointment() {
    // Logic to redirect to appointment creation page or open a modal
    console.log('Create appointment for:', this.post.title);
  }
}
