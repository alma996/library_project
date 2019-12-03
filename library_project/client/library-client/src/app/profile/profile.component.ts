import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile = {profileId: '0'};

  constructor(private  route: ActivatedRoute) {
    console.log("alma")
  }

  ngOnInit() {
    console.log('usoooooo');
    this.route.paramMap.subscribe(params => {
      console.log(params.get('profileId'));
      this.profile.profileId = params.get('profileId');
    });
  }

}
