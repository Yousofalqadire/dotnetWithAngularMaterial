import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'Models/ILogin';
import { IRegister } from 'Models/IRegister';
import { AccountService } from 'services/account.service';
import { ScriptService } from 'services/script.service';
import{IUser} from '../../../Models/user'
import{FormsModule, NgForm} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import{NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';

declare var $ : any;
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  //model:ILogin ={}
  
   
  _user:ILogin ={
    Email:'',
    Password:''
  };
  user :IUser;
  
    
  logingData:IUser ={
    userName:'',
    token:'',
    roles :[]
  };
  constructor(private scriptService: ScriptService,
    private accountService: AccountService,
    private router:Router,private toastr:ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
  
   this.scriptService.loadScripFile();
    
  }
   

   login()
  {    
    this.accountService.login(this._user).subscribe(response=>
     {    this.spinner.show();
        setTimeout(()=>{
          this.spinner.hide();
          this.toastr.success("welcom to our store !");
          this.router.navigateByUrl('/home')
        },3000)     
          
     },error=>{this.toastr.error(error.error)})  
 
  }

}
  

