import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPINT = 720;

@Component({
  selector: 'dvx-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private _mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPINT}px)`);

  users: Observable<User[]>;

  constructor(zone: NgZone, private _userService: UserService) {
    this._mediaMatcher.addListener(mql =>
      zone.run(() => this._mediaMatcher = <MediaQueryList>mql.target)
    );
  }

  ngOnInit() {
    this.users = this._userService.users;
    this._userService.loadAll();

    this.users.subscribe(data => {
      console.log(data);
    });
  }

  isScreenSmall(): boolean {
    return this._mediaMatcher.matches;
  }
}
