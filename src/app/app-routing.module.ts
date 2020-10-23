import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PendingQueriesComponent } from './components/pending-queries/pending-queries.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MyQueriesComponent } from './components/my-queries/my-queries.component';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AdminGuardService as AdminGuard } from './admin-guard.service';
import { UserGuardService as UserGuard } from './user-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pending-queries',
    canActivate: [AuthGuard, AdminGuard],
    component: PendingQueriesComponent
  },
  {
    path: 'user-list',
    canActivate: [AuthGuard, AdminGuard],
    component: UserListComponent
  },
  {
    path: 'my-queries',
    canActivate: [AuthGuard, UserGuard],
    component: MyQueriesComponent
  },
  {
    path: 'query-form',
    canActivate: [AuthGuard, UserGuard],
    component: QueryFormComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
