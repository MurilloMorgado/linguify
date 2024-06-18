import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './views/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent],
  template: `
  <!-- <router-outlet/> -->
   <app-page/>
  `,
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linguify';
}
