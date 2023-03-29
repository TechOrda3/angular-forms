import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserInfo} from './user-info';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit, AfterViewInit {

  // View => Model
  userInfo: UserInfo = {
    city: '',
    email: '',
    firstname: '',
    fullAddress: '',
    lastname: '',
    nickname: '',
    passport: '',
    postCode: '',
    yearOfBirth: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  get years() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 40)).fill('').map((_, idx) => now - idx);
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

  firstNameChange(firstname: string) {
    console.log(firstname)
  }
}
