import { Component, signal } from '@angular/core';
import {userTableComponent} from './components/user-table/user-table.component'

@Component ({
  selector:'app-root',
  standalone: true,
  imports: [userTableComponent],
  template: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'enterprise-grid'
}