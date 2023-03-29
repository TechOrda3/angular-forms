import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BannedWordDirective } from './template-driven/banned-word.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {HttpClientModule} from '@angular/common/http';
import { FormErrorComponent } from './form-error/form-error.component';
import {DynamicValidatorDirective} from './dynamic-validator.directive';
import { MyAwesomeInputComponent } from './my-awesome-input.component';

@NgModule({
    declarations: [
        AppComponent,
        TemplateDrivenComponent,
        BannedWordDirective,
        ReactiveFormsComponent,
        DynamicValidatorDirective,
        FormErrorComponent,
        MyAwesomeInputComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        FormErrorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
