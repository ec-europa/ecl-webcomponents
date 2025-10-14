import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currentTheme: 'ec' | 'eu' = 'eu';
  title = 'ecl-webcomponents-angular-consumer';

  ngOnInit() {
    this.updateTheme();
  }
  
  private updateTheme() {
    const theme = document.documentElement.getAttribute('data-ecl-theme');
    if (theme === 'ec' || theme === 'eu') {
      this.currentTheme = theme;
    }
  }
}
