import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './helpers/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { PendingQueriesComponent } from './components/pending-queries/pending-queries.component';
import { AcceptDialogComponent } from './components/pending-queries/accept-dialog/accept-dialog.component';
import { RejectDialogComponent } from './components/pending-queries/reject-dialog/reject-dialog.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateUserDialogComponent } from './components/user-list/create-user-dialog/create-user-dialog.component';
import { MyQueriesComponent } from './components/my-queries/my-queries.component';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuardService } from './auth-guard.service';
import { AdminGuardService } from './admin-guard.service';
import { UserGuardService } from './user-guard.service';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PendingQueriesComponent,
    AcceptDialogComponent,
    RejectDialogComponent,
    UserListComponent,
    CreateUserDialogComponent,
    MyQueriesComponent,
    QueryFormComponent,
    EditUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AdminGuardService,
    UserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
