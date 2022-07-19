import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   // addMovie(newTitle: string) {
   //    if(!this.movies.includes(newTitle)) {
   //       this.movies.push(newTitle);
   //    }
   // }

   addMovie (newTitle: string) {
      let error = '';
      if(newTitle === ''){
         error = 'Please enter a movie.';
      } else if (this.movies.includes(newTitle)) {
         error = `${newTitle} is already in the movie list.`;
      } else {
         this.movies.push(newTitle);
      }
      return error;
   }
}