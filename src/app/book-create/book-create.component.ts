import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  data: FormGroup;

  constructor(private fb: FormBuilder, private bookDervice: BookService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
        id: '',
        title: '',
        author: '',
        description: ''
      }
    );
  }

  createBook() {
    this.bookDervice.createBook(this.data.value).subscribe(next => {
      this.router.navigate(['/home']);
    });
    console.log(this.data.value);
  }
}
