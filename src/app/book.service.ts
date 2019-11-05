import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from './book.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.API_URL}`);
  }

  createBook(post: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(`${this.API_URL}`, post);
  }

  updateBook(post: IBook): Observable<IBook> {
    console.log('ok');
    return this.http.put<IBook>(`${this.API_URL}/${post.id}`, post);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
