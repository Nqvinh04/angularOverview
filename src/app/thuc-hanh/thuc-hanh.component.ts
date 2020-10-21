import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thuc-hanh',
  templateUrl: './thuc-hanh.component.html',
  styleUrls: ['./thuc-hanh.component.scss']
})
export class ThucHanhComponent implements OnInit {

  constructor() { }
  fontSize = 14;

  name = 'Nguyen Vinh';

  onChange(value){
    this.fontSize = value;
  }

  ngOnInit(): void {
  }

}
