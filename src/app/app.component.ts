import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PageTitle:String = "pipes in angular";
  users:any[]=[
    {id:101,name:'john',city:'Leipzig',salary:200, dob: new Date('05/10/1996')},
    {id:102,name:'peter',city:'Berlin',salary:2000, dob: new Date('12/09/1985')},
    {id:103,name:'moni',city:'Hamburg',salary:5000, dob: new Date('02/07/1989')},
    {id:104,name:'smith',city:'Munich',salary:4500, dob: new Date('11/04/1991')},
    {id:105,name:'kunal',city:'Stuttgart',salary:3500, dob: new Date('01/10/1988')}


  ];
}
