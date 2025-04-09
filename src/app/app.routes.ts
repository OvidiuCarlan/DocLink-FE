import { Routes } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path: 'signup', component: SignupPageComponent},

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent}
];
