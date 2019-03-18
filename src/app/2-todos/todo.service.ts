import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map(r => r));
  }

  getTodos() { 
    return this.http.get('...').pipe<any>(map(r => r));
  }

  getTodosPromise() {
    return this.http.get('...').pipe<any>(map(r => r)).toPromise();
  }

  delete(id) {
    return this.http.delete('...').pipe(map(r => r));
  }
}