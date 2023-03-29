import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchField = new FormControl();

  ngOnInit() {
    this.searchField.valueChanges.pipe(
      filter(val => val.length > 3)
    ).subscribe({
      next: value => console.log(value)
    })
  }
}
