import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingQueriesComponent } from './pending-queries.component';
import { MaterialModule } from './../../helpers/material.module';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';
import { RejectDialogComponent } from './reject-dialog/reject-dialog.component';

@NgModule({
  declarations: [PendingQueriesComponent, AcceptDialogComponent, RejectDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PendingQueriesComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
