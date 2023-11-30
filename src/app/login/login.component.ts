import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
   mobileno: string='';
   password: string='';

   onSubmit(){
     console.log("Mobileno:",this.mobileno);
     console.log("Password",this.password);
    
   }
}
