import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { TableCheckbox } from "./inspection/components/table-checkbox/table-checkbox";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableCheckbox, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taller');
}
