import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FexboxComponent } from './fexbox/fexbox.component';
@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [ButtonsComponent, FexboxComponent]
})
export class DemoModule { }
