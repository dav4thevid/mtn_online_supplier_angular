import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.scss']



})


export class ModalPopUpComponent implements OnInit {
  @Input() public data;

  constructor(
    private modalService: NgbModal,
  ) { }




  ngOnInit() {
    console.log(this.data);
    console.log(this.data[0].images)
  }


  dismissPopUp() {
		this.modalService.dismissAll();
  }





}
