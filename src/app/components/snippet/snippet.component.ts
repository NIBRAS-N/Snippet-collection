import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { DbService } from '../../service/db.service';
import { snippetsField } from '../../../models/snippet.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snippet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './snippet.component.html',
  styleUrl: './snippet.component.css'
})
export class SnippetComponent {

  constructor(private dbService:DbService , private router:Router){}



  title = new FormControl("",[
    Validators.required,
  ])

  snippet = new FormControl("",[
    Validators.required,
    
  ])

  snippetForm = new FormGroup({
    title:this.title,
    snippet:this.snippet
  })

  
  
   async subm(){
    if(this.snippetForm.get('title')!.value=="" || this.snippetForm.get('snippet')!.value==""  ) {
      alert("Field can not be empty");
      return;
    }else{

      console.log(this.snippetForm.value);
      await this.dbService.createSnippet(this.snippetForm.value as snippetsField)
      // this.router.navigate(["/login"]);
    }
  }
  
  reset(){
   this.snippet.reset()
  }

  
}
