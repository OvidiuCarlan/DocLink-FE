import { Injectable } from '@angular/core';
import { PostData } from '../../shared/models/post-model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly url = 'http://localhost:8081';

  constructor(private http: HttpClient, ) { }

  createPost(data: PostData): Observable<PostData> {
    return this.http.post<PostData>(this.url + '/posts', data)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error creating post:', error);
          return throwError(() => error);
        })
      );
  }

  getPosts(): Observable<PostData[]> {
    return this.http.get<PostData[]>(this.url + '/posts');
  }
}
