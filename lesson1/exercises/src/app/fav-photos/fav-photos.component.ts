import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos!';
  image1 = 'https://gray-kmov-prod.cdn.arcpublishing.com/resizer/99nnx9DYC_4yeGM-BAE7WP0KWdc=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/V4ID7BWXDRCYRAI73EK5PDJAVA.jpg';
  image2 = 'https://www.gannett-cdn.com/presto/2020/03/17/USAT/c0eff9ec-e0e4-42db-b308-f748933229ee-XXX_ThinkstockPhotos-200460053-001.jpg?crop=1170%2C658%2Cx292%2Cy120&width=1200';
  image3 = 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2019/04/avengers-endgame-1556244382.jpg';

  constructor() { }

  ngOnInit() {
  }

}