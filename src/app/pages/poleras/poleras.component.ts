import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-poleras',
  templateUrl: './poleras.component.html',
  styleUrls: ['./poleras.component.css']
})
export class PolerasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      // tslint:disable-next-line:no-non-null-assertion
      console.log('Jquery cargado');
    });
  }

}
