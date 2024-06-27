import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HeaderComponent, IntroducaoComponent, FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
