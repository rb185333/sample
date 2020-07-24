import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';

import { User } from "../../../types/user";
import { Album } from "../../../types/album";
import { Photo } from '../../../types/photo';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {

  constructor(private userService: UserService) { }

  public photos: Photo[];
  albumPhotos: string[];
  photo: Photo;

  ngOnInit() {
    this.userService.getPhotos().subscribe(res =>
      { this.photos = res; });
  }

  getAlbumPhotos(albumId) {
    this.albumPhotos = [];
    for (let i = 0; i < this.photos.length; i++) {
      if (albumId === this.photos[i]['albumId']) {
        this.albumPhotos.push(this.photos[i]['thumbnailUrl']);
      }
    }
  }

  onSelect(selected: Photo): void {
    this.photo = selected;
    const id = this.photo.albumId;
    this.getAlbumPhotos(id);
  }

}