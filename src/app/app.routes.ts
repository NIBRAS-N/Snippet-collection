import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { AboutComponent } from './components/about/about.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetsComponent } from './components/view-snippets/view-snippets.component';

export const routes: Routes = [

    { path:'create', component:SnippetComponent, canActivate:[authGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    // { path:"" , redirectTo:'/login' , pathMatch:"full"},
    { path:"" , component:HomeComponent},
    { path:"snippet/:id" , component:ViewSnippetsComponent},
    { path: "**", component:ErrorComponentComponent},
    
];
