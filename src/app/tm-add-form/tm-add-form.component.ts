import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Troublemaker } from '../troublemaker';
import { TmServiceService } from '../tm-service.service';
import { Router } from '@angular/router';
import { LocationService } from '../locations.service';
import { Locations } from '../locations';
import { empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tm-add-form',
  templateUrl: './tm-add-form.component.html',
  styleUrls: ['./tm-add-form.component.css']
})
export class TmAddFormComponent {
  locations:Locations[] = []
  form:FormGroup
  hideMap:boolean = true
  hideLocation:boolean = true

  constructor(private tmS:TmServiceService, private router:Router, public ls:LocationService, private http:HttpClient) {
    let formControls = {
      reporter_name: new FormControl('', [Validators.required]),
      reporter_phone: new FormControl('',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]),
      tm_name: new FormControl('', [Validators.required]),
      tm_location: new FormControl('', [Validators.minLength(3)]),
      location: new FormControl('', [Validators.required]),
      lat: new FormControl(),
      long: new FormControl(),
      tm_image_link: new FormControl(),
      extra_info: new FormControl()
    }
    this.form = new FormGroup(formControls)
    this.locations = ls.get()
  }

  emptyInput(control:FormControl) {

  }

  toggleMap() {
    this.hideMap = true
  }

  onSubmit(form_info:any) {
    this.tmS.add(form_info)
    if (form_info.location === 'add-new') {
      if (form_info.tm_location !== '') {
        this.ls.add(form_info.tm_location, Number(this.ls.clickedLat), Number(this.ls.clickedLong))
      } else {
        let emptyLocation:string = "(" + this.ls.clickedLat + ", " + this.ls.clickedLong + ")"
        this.ls.add(emptyLocation, Number(this.ls.clickedLat), Number(this.ls.clickedLong))
      }
    } else {
      this.ls.find(form_info.location).count++
      this.http.put('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/locations/', { "key":"locations", "data":this.locations }).subscribe()
    }
    this.router.navigate(["troublemakers"])
  }
  onSelectChange(e:any) {
    if ( e.target.options[e.target.selectedIndex].value != "add-new") {
      this.hideMap = true
      this.hideLocation = true
      this.ls.currentLocName = e.target.options[e.target.selectedIndex].value
      this.ls.clickedLat = this.ls.find(e.target.options[e.target.selectedIndex].value).lat.toString()
      this.ls.clickedLong = this.ls.find(e.target.options[e.target.selectedIndex].value).long.toString()
    } else {
      this.hideMap = false
      this.hideLocation = false
      this.ls.currentLocName = ''
      this.ls.clickedLat = ''
      this.ls.clickedLong = ''
      
    }
  }
}
