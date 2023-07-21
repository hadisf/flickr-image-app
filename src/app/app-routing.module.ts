import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageSearchComponent } from './image-search/image-search.component'; // Import your component here

const routes: Routes = [
  { path: '', redirectTo: '/image-search', pathMatch: 'full' },
  { path: 'image-search', component: ImageSearchComponent },
  { path:'**', redirectTo:'image-search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
