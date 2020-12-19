import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListGifComponent } from './list-gif/list-gif.component';



const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },

      {
        path: 'homepage',
        component: HomepageComponent,
        data: { title: 'Homepage' },
        pathMatch: 'full'
     },

      {
        path: 'listgifs',
        component: ListGifComponent,
        data: { title: 'ListGifs',
        pathMatch: 'full'
      },

     },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
