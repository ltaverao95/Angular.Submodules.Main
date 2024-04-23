import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderWebComponent } from './modules/Header/header-container/header-web/header-web.component';
import { BodyWebComponent } from './modules/Body/body-container/header-web/body-web.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderWebComponent, BodyWebComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'my-first-project';
}