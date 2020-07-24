import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { LibraryComponent } from './components/library/library.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'library', component: LibraryComponent },
  { path: '', redirectTo: '/library', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }