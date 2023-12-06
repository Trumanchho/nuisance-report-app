import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmServiceService } from '../tm-service.service';
import { Troublemaker } from '../troublemaker';

@Component({
  selector: 'app-view-troublemaker',
  templateUrl: './view-troublemaker.component.html',
  styleUrls: ['./view-troublemaker.component.css']
})
export class ViewTroublemakerComponent {
  id:number = Number(this.ActivatedRoute.snapshot.params['id'])
  troublemaker:Troublemaker
  constructor(private ActivatedRoute:ActivatedRoute, private tmS:TmServiceService) {
    this.troublemaker = this.tmS.find(this.id)
  }
}
