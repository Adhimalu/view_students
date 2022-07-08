import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {"Name":"Raju","Age":20,"photo":"https://www.vexels.com/free-vectors/avatar/"},
  {"Name":"Nikhil","Age":21,"photo":"https://www.vexels.com/free-vectors/avatar/"},
  {"Name":"Immu","Age":22,"photo":"https://www.vexels.com/free-vectors/avatar/"},
  {"Name":"Ani","Age":10,"photo":"https://www.vexels.com/free-vectors/avatar/"},
  {"Name":"Sona","Age":11,"photo":"https://www.vexels.com/free-vectors/avatar/"},
  {"Name":"Gayathri","Age":25,"photo":"https://www.vexels.com/free-vectors/avatar/"}
]
}
