import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DataTablesModule } from 'angular-datatables';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

@NgModule({
    imports: [CommonModule, LayoutRoutingModule, NgbDropdownModule,DataTablesModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ManageUserComponent]
})
export class LayoutModule {}
