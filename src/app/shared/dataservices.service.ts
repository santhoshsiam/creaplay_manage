import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor( private http : HttpClient) { }

  
    login_api(data){
      return this.http.post(' https://underdev.creaplay.in/login',data)
    }
    list_api(){
      return this.http.post(' https://underdev.creaplay.in/list_admin_user',{})
    }
    edti_api(data){
      return this.http.post(' https://underdev.creaplay.in/view_admin_user/',data)
    }
    delete_api(data){
      return this.http.get('https://underdev.creaplay.in/delete_admin_user/'+data)
    }
    
  
}
