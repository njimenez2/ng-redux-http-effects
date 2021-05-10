import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  search: FormControl;

  constructor(private router: Router) {
    this.search = new FormControl();
  }

  ngOnInit(): void {
  }

  buscar() {
    if (!this.search.value) {
      return;
    }

    this.router.navigate(['usuario', this.search.value]);

  }
}
