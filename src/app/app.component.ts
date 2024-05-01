import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import UsersJson from '../assets/users.json';
import { CommonModule } from '@angular/common';

interface USERS{
  id: number,
  name: String,
  username: String,
  email: String,
  src: String
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-data-app';

  Users: USERS[] = UsersJson;
  constructor(){
    // console.log(this.Users);
  }
}
