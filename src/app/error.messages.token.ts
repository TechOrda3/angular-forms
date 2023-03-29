import {InjectionToken} from '@angular/core';

export const ERROR_MESSAGES: { [key: string]: string } = {
  required: `This field is required`,
  requiredTrue: `This field is required`,
  email: `It should be a valid email`,
  minlength: `The value length is too short`,
  appPasswordShouldMatch: `Password should match`,
  passwordShouldMatch: `Password should match`,
  pattern: `Wrong format`,
}

export const ERROR_MESSAGE = new InjectionToken('error', {
  providedIn: 'root',
  factory: () => ERROR_MESSAGES
});
