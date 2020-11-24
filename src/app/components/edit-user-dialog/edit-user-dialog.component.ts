import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user-list/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  form: FormGroup;
  userTypes = [{ id: 1, name: 'Admin' }, { id: 2, name: 'User' }];
  constructor(public userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log("this.data", this.data);
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      user: new FormControl(this.data.user, [Validators.required]),
      email: new FormControl(this.data.email, [Validators.required]),
      password: new FormControl(this.data.password, [Validators.required]),
      roleId: new FormControl(this.data.roleId, [Validators.required]),
    })
  }

  createUser(form: any) {
    form.value.roleId = form.value.roleId;
    this.userService.createUser(form.value).subscribe((response) => {
      console.log("user", response);
    });
  }
}
