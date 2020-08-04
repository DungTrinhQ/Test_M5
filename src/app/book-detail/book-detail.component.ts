import {Component, OnInit} from '@angular/core';
import {IBook} from '../model/book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: IBook;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    let id: number;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }

}
