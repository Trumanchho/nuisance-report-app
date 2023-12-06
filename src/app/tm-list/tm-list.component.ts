import { Component, OnInit } from '@angular/core';
import { Troublemaker } from '../troublemaker';
import { TmServiceService } from '../tm-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tm-list',
  templateUrl: './tm-list.component.html',
  styleUrls: ['./tm-list.component.css']
})
export class TmListComponent implements OnInit {

  troublemakers:Troublemaker[] = []
  query:string
  showList = true
  constructor(private tmS:TmServiceService, private router:Router) {
    this.query = ''
  }

  async ngOnInit(): Promise<void> {
    this.troublemakers = this.tmS.get()
  }
  reInit() {
    this.showList = false;
    setTimeout(() => {
      this.showList = true;
    })
  }
  sortLocation() {
    this.tmS.sortByLocation()
    this.reInit()
  }
  sortName() {
    this.tmS.sortByName()
    this.reInit()
  }
  sortDate() {
    this.tmS.sortByDate()
    this.reInit()
  }
  sortStatus() {
    this.tmS.sortByStatus()
    this.reInit()
  }
}
