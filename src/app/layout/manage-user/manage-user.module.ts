import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUserRoutingModule } from './manage-user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ManageUserModule { }
