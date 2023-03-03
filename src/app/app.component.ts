import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examtest';
  darkMode: boolean = false;
  value: string = 'Dark Mode';

  changeMode(): void {
    this.darkMode = !this.darkMode;
    if (this.value.includes('Dark')) {
      this.value = 'Light Mode';
    } else {
      this.value = 'Dark Mode';
    }
  }
}
