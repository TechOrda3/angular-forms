import {ComponentRef, Directive, ElementRef, inject, OnInit, ViewContainerRef} from '@angular/core';
import {NgControl} from '@angular/forms';
import {FormErrorComponent} from './form-error/form-error.component';
// import {fromEvent, merge} from 'rxjs';

@Directive({
  selector: '[ngModel],[formControlName],[formControl]'
})
export class DynamicValidatorDirective implements OnInit {
  protected ngControl = inject(NgControl);
  protected viewContainerRef = inject(ViewContainerRef);
  protected elementRef = inject(ElementRef);

  protected componentRef: ComponentRef<FormErrorComponent> | undefined;

  ngOnInit() {
    this.ngControl.statusChanges?.subscribe({
      next: value => {
        if (!this.componentRef) {
          this.componentRef = this.viewContainerRef.createComponent(FormErrorComponent);
          this.componentRef.setInput('errors', this.ngControl.control?.errors)
        } else {
          this.componentRef.destroy();
        }
      }
    })
  }

}
