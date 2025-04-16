import { Routes } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DocLandingPageComponent } from './pages/doc-landing-page/doc-landing-page.component';
import { UserLandingPageComponent } from './pages/user-landing-page/user-landing-page.component';
import { CreatePostPageComponent } from './pages/create-post-page/create-post-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path: 'signup', component: SignupPageComponent},

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},

    {path: '', redirectTo: 'doc-landing', pathMatch: 'full'},
    {path: 'doc-landing', component: DocLandingPageComponent},

    {path: '', redirectTo: 'user-landing', pathMatch: 'full'},
    {path: 'user-landing', component: UserLandingPageComponent},

    {path: '', redirectTo: 'create-post', pathMatch: 'full'},
    {path: 'create-post', component: CreatePostPageComponent},
];
