import { Injectable } from "@angular/core";
import { Observable, of, delay } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private mockUsers: User[] = Array.from({length: 50}, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@enterprise.com`,
    role: i % 3 === 0 ? 'Admin' : (i % 2 === 0 ? 'Editor' : 'Viewer'),
    status: i % 5 === 0 ? 'Inactive' : 'Active',
    lastLogin: new Date().toISOString()
  }));

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.mockUsers).pipe(delay(800));
  }
}