import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component'
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'user', 'email', 'user_type'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, public userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  openCreateDialog() {
    let dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((userList: any) => {
      userList.forEach((user, index) => {
        user.id = index + 1;         
      });
      this.dataSource = new MatTableDataSource(userList);
      this.dataSource.paginator = this.paginator;
    });
  }
}
