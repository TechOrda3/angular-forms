import {Component, inject, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {ERROR_MESSAGE, ERROR_MESSAGES} from '../error.messages.token';

function mustMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password?.value === confirmPassword?.value) {
    return null
  } else {
    return {
      mustMatch: {
        mustMatch: 'Validation failed, must match'
      }
    }
  }
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
  // providers: [
  //   {
  //     provide: ERROR_MESSAGE,
  //     useValue: {
  //       ...ERROR_MESSAGES,
  //       required: 'Обязательное поле'
  //     }
  //   }
  // ]
})
export class ReactiveFormsComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    myAwesomeControl: ['fsddsadsa', Validators.required],
    firstname: ['Test', Validators.required],
    lastname: ['Test', Validators.required],
    nickname: ['Test', [Validators.required]],
    email: ['test@test.com', [Validators.required, Validators.email]],
    yearOfBirth: [2001],
    passport: ['', [Validators.minLength(3), Validators.maxLength(5)]],
    address: this.formBuilder.nonNullable.group({
      fullAddress: ['Almaty'],
      city: [],
      postCode: [],
    }),
    password: this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: mustMatch })
  }, { updateOn: 'blur' });

  ngOnInit(): void {
    // this.form.controls.firstname.setValue(0);
    // this.form.controls.lastname.valueChanges.subscribe({
    //   next: value => {
    //     if (value === 'nickname') {
    //       this.form.controls.nickname.disable();
    //     } else {
    //       this.form.controls.nickname.enable();
    //     }
    //   }
    // })
    // this.form.get('email')?.valueChanges.subscribe({
    //     next: value => {
    //       if (value === 'test@test.com') {
    //         this.form.addControl('anotherEmail', new FormControl('', Validators.required))
    //       } else {
    //         this.form.removeControl('anotherEmail')
    //       }
    //     }
    //   })
    // this.form.valueChanges.subscribe({
    //   next: value => console.log(value)
    // })
    // this.form.controls.nickname.valueChanges.subscribe({
    //   next: value => {
    //     this.form.patchValue({
    //       lastname: 'test lastname',
    //       email: 'test@gmail.com'
    //     })
    //   }
    // })
  }

  get years() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 40)).fill('').map((_, idx) => now - idx);
  }

  onSubmit() {
    this.form.reset();
    // console.log(this.form.value)
    // this.form.controls.firstname.setValue(0)
    // if (this.form.invalid) return;
  }
}
