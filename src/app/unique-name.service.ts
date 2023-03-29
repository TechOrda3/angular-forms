import {inject, Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniqueNameService implements AsyncValidator {

  // private httpClient = inject(HttpClient);

  constructor(
    private httpClient: HttpClient
  ) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
  validate(control: AbstractControl): ValidationErrors | null;
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | ValidationErrors | null {
    console.log(control.value)
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users?username=${control.value}`).pipe(
      map(users => users.length ? { appUniqueName: {error: 'Name is already taken'} }: null)
    );
  }
}
