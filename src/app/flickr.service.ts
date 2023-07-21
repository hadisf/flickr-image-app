import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrRssService {
  private apiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne';

  constructor(private http: HttpClient) { }

  searchPhotos(searchText: string): Observable<any> {
    const params = new HttpParams().set('tags', searchText).set('format', 'json');
    const flickrUrl = `${this.apiUrl}?tags=${params.get('tags')}&format=${params.get('format')}`;

    return this.http.jsonp(flickrUrl, 'jsoncallback').pipe(
      map((response: any) => response.items)
    );
  }
}
