import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueryService } from '../../query-form/query.service';

@Component({
  selector: 'app-reject-dialog',
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.css']
})
export class RejectDialogComponent implements OnInit {
  form: FormGroup;
  query: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public queryService: QueryService) {
    this.query = data;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      reason: new FormControl('', [Validators.required]),
    })
  }

  rejectQuery() {
    this.query.rejectMssg = this.form.value.reason;
    this.queryService.rejectQuery(this.query).subscribe((data) => {
      console.log("data");
    });
  }
}
