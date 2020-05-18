import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolerasComponent } from './pages/poleras/poleras.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { ZapatillasComponent } from './pages/zapatillas/zapatillas.component';
import { RelojComponent } from './pages/reloj/reloj.component';


const routes: Routes = [
  {
  path: 'poleras',
  component: PolerasComponent
  },
  {
  path: 'pantalones',
  component: PantalonesComponent
  },
  {
  path: 'zapatillas',
  component: ZapatillasComponent
  },
  {
   path: 'reloj',
   component: RelojComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
