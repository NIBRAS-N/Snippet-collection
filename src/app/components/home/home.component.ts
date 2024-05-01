import { Component } from '@angular/core';
import { DbService } from '../../service/db.service';
import { snippetsField } from '../../../models/snippet';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  constructor(private dbService:DbService, private authService:AuthService){

  }
  authServiceGetter(){
    return this.authService;
  }
  allSnippet: {id:string,title:string}[]= []
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.dbService.getAllSnippets().then((item:any)=>{
      console.log(item)
      this.allSnippet = item;
    })
  }
}
