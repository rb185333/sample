import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';

import { User } from '../../../types/user';
import { Album } from '../../../types/album';
import { Photo } from '../../../types/photo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users: User[];
  public albums: Album[];
  public photos: Photo[]
  selectedUser: User;

  selectedAlbums: number[];
  thumbnails: string[];
  albumPhotos: string[];
  index: number;

  ngOnInit() {
    this.userService.getUsers().subscribe(res => { this.users = res; });
    this.userService.getAlbums().subscribe(res => { this.albums = res; });
    this.userService.getPhotos().subscribe(res => { this.photos = res; });
  }

  getUserAlbums(userId) {
    this.selectedAlbums = [];
    for (let i = 0; i < this.albums.length; i++) {
      if (userId === this.albums[i]['userId']) {
        this.selectedAlbums.push(this.albums[i]['id']);
      }
    }
  }

  getThumbnails(albumIds:number[]): void {
    this.thumbnails = [];
    this.index = 0;
    for (let i = 0; i < this.photos.length; i++) {
      if (albumIds[this.index] === this.photos[i]['albumId']) {
        this.thumbnails.push(this.photos[i]['thumbnailUrl']);
        this.index++;
      }
    }
  }

  getAlbumPhotos(albumId) {
    this.albumPhotos = [];
    for (let i = 0; i < this.photos.length; i++) {
      if (albumId === this.photos[i]['albumId']) {
        this.albumPhotos.push(this.photos[i]['thumbnailUrl']);
      }
    }
  }

  // expandAlbum(photoUrl: String): void {
  //   // this.selectedPhoto = photo;
  //   // const alId = this.selectedPhoto.albumId;
  //   // this.getAlbumPhotos(alId);
  //   this.albumPhotos = [];
  //   for (let i = 0; i < this.photos.length; i++) {
  //     if (photoUrl === this.photos[i]['thumbnailUrl']) {
  //       this.albumPhotos.push(this.photos[i]['album']);
  //     }
  //   }

  // }

  onSelect(user: User): void {
    this.selectedUser = user;
    const id = this.selectedUser.id;
    const al = this.selectedAlbums;
    this.getUserAlbums(id);
    this.getThumbnails(al);
  }

}