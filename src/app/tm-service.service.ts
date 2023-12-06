import { Injectable, OnInit } from '@angular/core';
import { Troublemaker } from './troublemaker';
import { TroublemakerComponent } from './troublemaker/troublemaker.component';
import { FormGroup } from '@angular/forms';
import { LocationService } from './locations.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmServiceService {
  troublemakers:Troublemaker[] = []
  getObj:any
  constructor(private ls:LocationService, private http:HttpClient) {
  }
  get() {
    return this.troublemakers
  }
  // async get() {
  //   this.getObj = await firstValueFrom(
  //     this.http.get('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/tm_list/').pipe(map(res=>{return res})))
  //     this.troublemakers = this.getObj.data
  //   //this.getObj.data = this.troublemakers
  //   return this.troublemakers
  // }
  add(form_info:any) {
    let phone_num:string = form_info.reporter_phone.toString()
    if (form_info.location === 'add-new') {
      if (form_info.tm_location === '') {
        let emptyLocation:string = "(" + this.ls.clickedLat + ", " + this.ls.clickedLong + ")"
        this.troublemakers.push(new Troublemaker(form_info.tm_name, phone_num, emptyLocation, 
          form_info.reporter_name, form_info.extra_info,
          form_info.tm_image_link))
      } else {
        this.troublemakers.push(new Troublemaker(form_info.tm_name, phone_num, form_info.tm_location, 
          form_info.reporter_name, form_info.extra_info,
          form_info.tm_image_link))
      }
    } else {
      this.troublemakers.push(new Troublemaker(form_info.tm_name, phone_num, form_info.location, 
                                                form_info.reporter_name, form_info.extra_info,
                                                form_info.tm_image_link))
    }
    this.http.put('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/max_id/', { "key":"max_id", "data":Troublemaker.total }).subscribe()
    console.log(Troublemaker.total)
    this.http.put('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/tm_list/', { "key":"tm_list", "data":this.troublemakers })
    .subscribe()
  }

  delete(id:number) {
    this.troublemakers =  this.troublemakers.filter((tm)=>{
      return tm.id !== id
    })
    this.http.put('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/tm_list/', { "key":"tm_list", "data":this.troublemakers })
    .subscribe()
  }

  find(id:number):Troublemaker {
    return this.troublemakers.filter(tm=>{
      return tm.id === id
    })[0]
  }

  sortByLocation() {
    function cmp(a:Troublemaker, b:Troublemaker) {
      if (a.location < b.location) {
        return -1
      } else if (a.location > b.location) {
        return 1
      } else {
        return 0
      }
    }
    this.troublemakers.sort(cmp)
  }
  sortByName() {
    function cmp(a:Troublemaker, b:Troublemaker) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    }
    this.troublemakers.sort(cmp)
  }
  sortByDate() {
    function cmp(a:Troublemaker, b:Troublemaker) {
      if (a.date_added < b.date_added) {
        return -1
      } else if (a.date_added > b.date_added) {
        return 1
      } else {
        return 0
      }
    }
    this.troublemakers.sort(cmp)
  }
  sortByStatus() {
    function cmp(a:Troublemaker, b:Troublemaker) {
      if (a.resolved < b.resolved) {
        return -1
      } else if (a.resolved > b.resolved) {
        return 1
      } else {
        return 0
      }
    }
    this.troublemakers.sort(cmp)
  }
}

