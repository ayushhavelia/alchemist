import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qsn',
  templateUrl: './qsn.component.html',
  styleUrls: ['./qsn.component.css']
})
export class QsnComponent implements OnInit {

  constructor(private router: Router) {}
  qsn='';
  level='';
  ngOnInit() {
  }

  showskip=false;
  shint=false;

  showHint(){
    this.shint=true;
  }

  skipQsn(){
    this.router.navigate(['qsn']);
  }
}
