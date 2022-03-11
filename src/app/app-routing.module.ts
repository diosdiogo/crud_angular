import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AssociadoComponent } from './views/associado/associado.component'
import { AssociadoCreateComponent } from './components/associado/associado-create/associado-create.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path : "associados",
    component: AssociadoComponent
  },
  {
    path: "associado/create",
    component: AssociadoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
