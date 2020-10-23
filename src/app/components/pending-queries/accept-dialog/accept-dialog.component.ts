import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueryService } from '../../query-form/query.service';

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.css']
})
export class AcceptDialogComponent implements OnInit {
  query: any;
  queryError: any;
  typeError: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public queryService: QueryService, private dialogRef: MatDialogRef<AcceptDialogComponent>) { 
    this.query = data;
  }

  ngOnInit(): void {
  }

  approveQuery() {
    this.queryService.approveQuery(this.query).subscribe((data: any) => {
      if (data.error) {
        this.queryError = data.error;
        this.typeError = data.typeError;
      } else { 
        this.queryError = data.error;
        this.dialogRef.close();
      }
    });
  }
}