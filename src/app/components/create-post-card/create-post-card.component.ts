import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-post-card',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-post-card.component.html',
  styleUrl: './create-post-card.component.scss'
})
export class CreatePostCardComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      content: ['', [Validators.required]],
      category: ['general', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Post created:', this.postForm.value);
      // TODO: Send data to backend via service
      this.postForm.reset();
    }
  }
}
