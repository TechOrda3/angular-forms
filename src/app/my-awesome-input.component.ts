import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-my-awesome-input',
  template: `
    <div class="form-field">
      <label for="awesome">Awesome Control</label>
      <input
        type="text"
        id="awesome"
        placeholder="Enter your custom name"
        [value]="value"
        (blur)="onTouch()"
        (input)="onChange($any($event.target).value)"
      >
    </div>
  `,
  styles: [
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MyAwesomeInputComponent,
      multi: true
    }
  ]
})
export class MyAwesomeInputComponent implements OnInit, ControlValueAccessor {
  value = '';
  isDisabled = false;

  onChange = (val: string) => {};
  onTouch = () => {}

  ngOnInit(): void {
  }

  writeValue(obj: any) {
    this.value = obj;
    this.onChange(this.value);
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
