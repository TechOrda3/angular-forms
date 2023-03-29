import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appBannedWord]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BannedWordDirective,
      multi: true
    }
  ]
})
export class BannedWordDirective implements Validator {

  @Input() appBannedWord: string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.appBannedWord === control.value) {
      return { appBannedWord: { bannedWord: this.appBannedWord } }
    }
    return null
  }

}
