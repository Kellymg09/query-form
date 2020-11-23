import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../user.service'

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'user', 'email', 'user_type', 'edit_user'];
  form: FormGroup;
  userTypes = [{ id: 1, name: 'Admin' }, { id: 2, name: 'User' }];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      roleId: new FormControl([], [Validators.required]),
    })
  }

  editUser(form: any) {
    form.value.roleId = form.value.roleId.id;
    this.userService.editUser(form.value).subscribe((response) => {
      console.log("user", response);
    });
  }
}
