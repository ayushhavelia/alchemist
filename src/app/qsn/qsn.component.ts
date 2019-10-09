import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qsn',
  templateUrl: './qsn.component.html',
  styleUrls: ['./qsn.component.css']
})
export class QsnComponent implements OnInit {

  constructor() {}
  qsn='';
  level='';
  ngOnInit() {
  }
  shint=false;
  showHint(){
    this.shint=true;
  }

}
