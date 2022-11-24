import { CategoriesModule } from './modules/categories/categories.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'items',
    loadChildren: () =>
      import('./modules/items/items.module').then((m) => m.ItemsModule),
  },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./modules/authors/authors.module').then((m) => m.AuthorsModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
