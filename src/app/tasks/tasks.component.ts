import { Component, OnInit } from '@angular/core';
import { PageContent } from '../pageContent';
import { PAGECONTENTS} from '../mock-pageContent'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  constructor() { }
  
  userInput : String  = "Write something in the input field to change this label";
  selectedpageContent : PageContent ;
  pagesContents = PAGECONTENTS;


  ngOnInit() {
  }


  onSelectPageContent (pageContent:PageContent){
    this.selectedpageContent = pageContent;
    console.log( this.selectedpageContent.name);
  }
}
