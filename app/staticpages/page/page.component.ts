import { Component, OnInit } from '@angular/core';
import { StaticpagesService } from '../staticpages.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  

  ngOnInit(): void {
  }

  file: any;
 
 constructor(
   private uploadService: StaticpagesService
 ){
 
 }
 
 onFilechange(event: any) {
   console.log(event.target.files[0])
   this.file = event.target.files[0]
 }
 
 upload() {
   if (this.file) {
     this.uploadService.uploadfile(this.file).subscribe(resp => {
       alert("Uploaded")
     })
   } else {
     alert("Please select a file first")
   }
 }

}
