import {Component, OnInit} from '@angular/core';
import {IBook} from '../book.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  deleteBook(i: number) {
    this.bookService.deleteBook(i).subscribe(() => {
      this.router.navigate(['/home']);
    }, this.errorHandle);
  }

  errorHandle(error: any) {
    alert('Error !!!');
  }
}
