import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QueryService } from '../query-form/query.service';

@Component({
  selector: 'app-my-queries',
  templateUrl: './my-queries.component.html',
  styleUrls: ['./my-queries.component.css']
})
export class MyQueriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'query', 'status', 'comments', 'rejectReason'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public queryService: QueryService) { }

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user'));
    this.queryService.getUserPendingQueries(user).subscribe((response: any) => {
      response.forEach((user, index) => {
        user.id = index + 1;         
      });
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  getQueryStatus(query: any) {
    if (query.statusId === 1) {
      return 'Pending';
    } else if (query.statusId === 2) {
      return 'Approved';
    } else if (query.statusId === 3) {
      return 'Rejected';
    }
  }
}
