import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['root.component.scss']
})

export class RootComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public LogOut(): void {
    this.authService.Logout();
  }

  ngOnInit() {
    // console.log('lol');
    //this.authService.CheckAuth();
  }

}
