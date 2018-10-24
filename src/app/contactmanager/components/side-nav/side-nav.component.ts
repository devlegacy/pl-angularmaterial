import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPINT = 720;

@Component({
  selector: 'dvx-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private _mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPINT}px)`);

  users: Observable<User[]>;

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  isDarkTheme: boolean= false;
  dir:string = 'ltr';

  constructor(zone: NgZone, private _userService: UserService, private _router: Router) {
    this._mediaMatcher.addListener(mql =>
      zone.run(() => this._mediaMatcher = <MediaQueryList>mql.target)
    );
  }

  ngOnInit() {
    this.users = this._userService.users;
    this._userService.loadAll();

    // this.users.subscribe(data => {
    //   if(data.length > 0) {
    //     this._router.navigate(['/contactmanager', data[0].id]);
    //   }
    // });

    this._router.events.subscribe( () => {
      if(this.isScreenSmall()) {
        // TODO: Close our sidenav
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this._mediaMatcher.matches;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl': 'ltr';

    this.sidenav.close().then(() => this.sidenav.open());
  }
}
