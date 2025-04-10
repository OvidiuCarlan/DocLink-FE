import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'console';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      const formData = this.loginForm.value;
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) =>{
          console.log('Login successful!', res);
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });

    }
  }


}
