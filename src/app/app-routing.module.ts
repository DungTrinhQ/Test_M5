import {DeleteBookComponent} from './delete-book/delete-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {BookListComponent} from './book-list/book-list.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookDetailComponent} from './book-detail/book-detail.component';


const routes: Routes = [
  {
    path: 'book-detail/:id',
    component: BookDetailComponent
  },
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'create-book',
    component: CreateBookComponent
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent
  },
  {
    path: 'delete-book/:id',
    component: DeleteBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
