import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  submit(login: any){
    alert("are you sure you want to submit the form,once submitted cannot be edited again")
    console.log("form submitted",login)
  }
            

  constructor() { }

  ngOnInit(): void {
  }

}
