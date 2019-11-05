import {Component, OnInit} from '@angular/core';
import {IBook} from '../book.interface';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  output: IBook[];
  info: IBook;

  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
  }

}
