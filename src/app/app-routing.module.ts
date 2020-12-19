import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
 },
 {
  path: 'home',
  loadChildren: () =>
    import('./Component/component.module').then(m => m.ComponentModule)
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
