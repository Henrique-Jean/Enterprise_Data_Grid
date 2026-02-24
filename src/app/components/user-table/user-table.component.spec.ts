import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})

export class userTableComponent {
  private userService = inject(UserService);

  users = signal<User[]>([]);
  loading = signal<boolean>(true);

  currentPage = signal(1);
  pageSize = signal(10);

  paginatedUsers = computed(() =>{
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    return this.users().slice(startIndex, startIndex + this.pageSize());
  });

  totalLenght = computed(() => this.users().length);

  constructor() {
    this.loadData();
  }

  loadData() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },

      error: (err) => console.error(err)
    });
  }

  nextPage() {
    if ((this.currentPage()* this.pageSize()) < this.totalLenght()) {
      this.currentPage.update(p => p + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }
}