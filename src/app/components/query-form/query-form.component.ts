import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryService } from './query.service';
import { DBService } from './../db/db.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  form: FormGroup;
  queryError: boolean;
  dbs: any[];

  constructor(public queryService: QueryService,
              public dbService: DBService) { }

  ngOnInit(): void {
    this.initForm();
    this.dbService.getDatabases().subscribe((response: any) => {
      this.dbs = response;
    });
  }

  initForm() {
    this.form = new FormGroup({
      query: new FormControl('', [Validators.required]),
      dbId: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
    })
  }

  sendQuery() {
    const query = this.form.value;
    const loggedUser = sessionStorage.getItem('user');
    query.userName = JSON.parse(loggedUser).email;
    this.queryService.saveQuery(this.form.value).subscribe((response) => {
      this.queryError = false;
    }, (err) => {
      this.queryError = true;
    }); 
  }

}
