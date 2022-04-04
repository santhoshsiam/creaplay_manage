import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataservicesService } from '../../shared/dataservices.service';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  tabledetails: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  
  constructor(private modalService: NgbModal,
    private api: DataservicesService,
    private toastr: ToastrService,
    private http: HttpClient) {}


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.listSessionData();
  }

  listSessionData() {
    this.api.list_api()
      .subscribe((sub: any) => {
        console.log(sub)
        this.tabledetails = sub.data.user_list;
        //this.dtTrigger.next();
      })
  }

  openAdd() {
    this.modalService.open(AddUserComponent, { size: 'md' })
  }

  openedit(tabledetail) {
    let modelref = this.modalService.open(EditUserComponent);
    modelref.componentInstance.tabledetail = tabledetail
  }

  deleteSession(tabledetail) {  
    var con = window.confirm(`Are you sure to delete  ${tabledetail.name}`)
    if (con == true) {
      this.api.delete_api(tabledetail._id)
        .subscribe((sub: any) => {
          if (sub.status == 1) {
            this.listSessionData();
            this.toastr.success("Successfully")
          } else {
            this.toastr.error("not Successfully")
          }
        }, error => {

        })
    }
  }



}


