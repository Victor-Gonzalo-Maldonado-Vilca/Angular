import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name: string;
  email; //string;
  webpage: string;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    console.log('Constructor Working...');
    this.name = 'Victor Gonzalo Malldonado Vilca';
    this.email = 'vmaldonadov@unsa.edu.pe';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ['Futbol', 'Programacion', 'Netflix'];
    this.showHobbies = false;
  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  newHobby(hobby: any) {
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }
} 
