import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.espn.com/','https://www.nytimes.com/games/wordle/index.html','https://www.youtube.com/'];
  gif = 'https://hookagency.com/wp-content/uploads/2015/10/throw-away-the-computer-graphic-design-gifs.gif';

  constructor() { }

  ngOnInit() {
  }

}
