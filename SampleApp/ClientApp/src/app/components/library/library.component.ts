import { Component, OnInit } from '@angular/core';

import { User } from '../../../types/user';
import { Album } from '../../../types/album';
import { Photo } from '../../../types/photo';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private userService: UserService) { }

  public photos: Photo[];

  ngOnInit() {
    // this.userService.getPhotos().subscribe(res =>
    //   { this.photos = res.slice(0, 12); });
  }

}