import {Component, inject, Input, OnInit} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {ERROR_MESSAGE, ERROR_MESSAGES} from '../error.messages.token';

@Component({
  selector: 'app-form-error',
  styleUrls: ['./form-error.component.scss'],
  template: `
    <ng-container *ngFor="let error of errors | keyvalue">
      <p class="input-error">{{errorMessages[error.key]}}</p>
    </ng-container>
  `
})
export class FormErrorComponent implements OnInit {
  @Input() errors: ValidationErrors|null|undefined = {};
  errorMessages = inject(ERROR_MESSAGE);

  constructor() { }

  ngOnInit(): void {
  }

}
