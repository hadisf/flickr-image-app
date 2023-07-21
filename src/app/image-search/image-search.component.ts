import { Component, OnInit } from '@angular/core';
import { FlickrRssService } from '../flickr.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-image-search',
  templateUrl: 'image-search.component.html',
  styleUrls: ['image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  searchText: string = '';
  photos: any[] = [];
  searchSubject: Subject<string> = new Subject<string>();
  isModalOpen = false
  selectedImage:any

  constructor(private flickrService: FlickrRssService) {}

  ngOnInit() {
    this.flickrService.searchPhotos('city')
      .subscribe((photos: any[]) => {
        this.photos = photos;

        this.authorName()
      });

    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchText: string) => {
      this.flickrService.searchPhotos(searchText)
        .subscribe((photos: any[]) => {
          this.photos = photos;
          this.authorName()
        });
    });
  }
  openImage(photo:any){
    this.isModalOpen = true;
    photo.media.m = photo.media.m.replace('_m.jpg', '_b.jpg');
    this.selectedImage = photo
  }

  authorName(){
    this.photos.forEach((photo)=>{
      const matches = photo.author.match(/"([^"]+)"/);
      if (matches && matches.length >= 2) {
        photo.author = matches[1];
      }
    })

  }

  search() {
    this.searchSubject.next(this.searchText);
  }


}
