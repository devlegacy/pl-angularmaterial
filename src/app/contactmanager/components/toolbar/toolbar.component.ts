import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'dvx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  toggleSidenav = new EventEmitter<void>();
  @Output()
  toggleTheme = new EventEmitter<void>();
  @Output()
  toggleDir = new EventEmitter<void>();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit() {
  }

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
      if(result){
        this.openSnackBar('Contact added','Navigate').onAction().subscribe(() => {
          // Navigate
          this.route.navigate(['/contactmanager', result.id]);
        });
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
