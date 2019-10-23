import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/fontawesome-free-brands";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCoffee = faCoffee;
  faAddressBook = faAddressBook;
  faWhatsapp = faWhatsapp;
  title = 'fontawesome';
}
