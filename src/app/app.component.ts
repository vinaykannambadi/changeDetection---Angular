import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  p: any;
  data: any;
  ngOnInit():void{
    this.p = {
      firstname: 'Vinay',
      lastname: 'M'
    };
    this.data = new BehaviorSubject(this.p);
  }

  changeName() {

    this.p = {
      firstname: 'Manju',
      lastname: 'Y.S'
    };
    this.data.next(this.p);
  }
  
}
