import {Directive, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {map} from 'rxjs';

@Directive({
  selector: '[appUniqueName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqueNameDirective,
      multi: true
    }
  ]
})
export class UniqueNameDirective implements Validator {
  private httpClient = inject(HttpClient);

  validate(control: AbstractControl): ValidationErrors | null {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users?username=${control.value}`).pipe(
      map(users => users.length ? { appUniqueName: {error: 'Name is already taken'} }: null)
    );
  }

}
