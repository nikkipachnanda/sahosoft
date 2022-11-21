import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../navbar.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userDisplayName : any;
  constructor(public nav: NavbarService ) {  }

  ngOnInit(): void {
      setTimeout(() => { this.ngOnInit() }, 100)
        this.userDisplayName = localStorage.getItem('user');
    localStorage.setItem('user', this.userDisplayName);
  }
  logout() 
  {
    localStorage.clear();
  }

 
}
