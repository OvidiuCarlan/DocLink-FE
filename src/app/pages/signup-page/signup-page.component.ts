import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
signupForm: FormGroup;

constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  this.signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],  
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

  onSubmit(){
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.authService.signUp(formData).subscribe({
        next: (res) => {
          console.log('Signup successful!', res);
          alert("Sign up Successful!");
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Signup failed:', err);
        },
      });
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
