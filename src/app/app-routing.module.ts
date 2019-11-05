import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: BookListComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'home/:id',
    component: BookDetailComponent
  },
  {
    path: 'home/edit/:id',
    component: BookUpdateComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
