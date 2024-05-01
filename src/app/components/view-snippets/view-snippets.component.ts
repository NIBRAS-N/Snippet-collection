import { Component } from '@angular/core';
import { DbService } from '../../service/db.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-snippets',
  standalone: true,
  imports: [],
  templateUrl: './view-snippets.component.html',
  styleUrl: './view-snippets.component.css'
})
export class ViewSnippetsComponent {
  codeSnippet = {
    title:"",
    snippet:""
  }
  constructor(private route: ActivatedRoute,private dbService: DbService) { }

  ngOnInit(){
    const docId = this.route.snapshot.paramMap.get('id');
    this.dbService.getSnippet(docId!).then((data:any)=>{
      this.codeSnippet = data
    })
  }
}
