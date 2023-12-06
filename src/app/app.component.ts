import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { Troublemaker } from './troublemaker';
import { TmServiceService } from './tm-service.service';
import { LocationService } from './locations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  display:boolean = false
  title = 'Nuisance Report App';
  maxIdObj:any
  listObj:any
  locObj:any
  constructor (private http:HttpClient, private tmS:TmServiceService, private ls:LocationService) {

  }
  async ngOnInit(): Promise<void> {
    this.maxIdObj = await firstValueFrom(this.http.get('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/max_id/')
    .pipe(map(res=>{return res})))
    this.listObj = await firstValueFrom(this.http.get('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/tm_list/')
    .pipe(map(res=>{return res})))
    this.locObj = await firstValueFrom(this.http.get('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/locations/')
    .pipe(map(res=>{return res})))
    Troublemaker.total = this.maxIdObj.data
    this.tmS.troublemakers = this.listObj.data
    this.ls.locations = this.locObj.data
    this.display = true
  }
}
