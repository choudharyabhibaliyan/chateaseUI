import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from 'src/services/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:"/user",pathMatch:'full'},
  { path:"user", loadChildren: () => import('./user/user.module').then(m => m.UserModule) , canActivate:[AuthGuard]},
  { path:"login" , component:LoginComponent},
  { path:"signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
