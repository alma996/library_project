import {Component, OnInit} from '@angular/core';

const usersList = [{id: 1, firstName: 'Alma', lastName: 'Sadikovic'},
  {id: 2, firstName: 'Armin', lastName: 'Ferhatbegovic'}];


export class User {
  id: string;
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  users = [{id: 1, firstName: 'Alma', lastName: 'Sadikovic'},
    {id: 2, firstName: 'Armin', lastName: 'Ferhatbegovic'}];

  constructor() {

  }

  ngOnInit() {
  }

}
