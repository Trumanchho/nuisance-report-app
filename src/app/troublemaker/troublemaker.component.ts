import { Component, Input } from '@angular/core';
import { Troublemaker } from '../troublemaker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-troublemaker',
  templateUrl: './troublemaker.component.html',
  styleUrls: ['./troublemaker.component.css']
})
export class TroublemakerComponent {
  @Input() troublemaker:any
  constructor(private router:Router) {
  //   this.troublemaker = new Troublemaker("Monster X", "Metrotown")
  }

  onView() {
    this.router.navigate(["/troublemakers",this.troublemaker.id])
  }

  onEdit() {
    this.router.navigate(['/troublemakers/edit',this.troublemaker.id])
  }
}
