import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path: 'equipos', component: EquiposComponent},
{path: 'index', component: IndexComponent},
{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
