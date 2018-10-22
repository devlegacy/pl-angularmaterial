import { Component, OnInit, NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPINT = 720;

@Component({
  selector: 'dvx-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private _mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPINT}px)`);

  constructor(zone: NgZone) {
    this._mediaMatcher.addListener(mql =>
      zone.run(() => this._mediaMatcher = <MediaQueryList>mql.target)
    );
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this._mediaMatcher.matches;
  }
}
