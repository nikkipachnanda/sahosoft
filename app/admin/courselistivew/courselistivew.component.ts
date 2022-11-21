import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-courselistivew',
  templateUrl: './courselistivew.component.html',
  styleUrls: ['./courselistivew.component.css']
})
export class CourselistivewComponent implements OnInit {
  @Input('course') courseArr!: any;
  @Output('delEvnt') foodDel = new EventEmitter<number>();
  
  constructor() { }
    ngOnInit(): void {
  }

  delEvent(index:number)
  {
    this.foodDel.emit(index);
  }

}
