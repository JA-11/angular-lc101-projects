import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Cut grass'];

   targetImage = 'https://media.istockphoto.com/vectors/target-icon-on-transparent-background-vector-id1282050925?k=20&m=1282050925&s=612x612&w=0&h=N2_Pwrz-wVUvRI5yNkqcGWkyor6WDlo-2y0sWzLUMco=';

   constructor() { }

   ngOnInit() {
   }

}
