import { Injectable } from '@angular/core';
import { Locations } from './locations';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locations:Locations[] = []
  currentLocName:string = ''
  clickedLat:string = ''
  clickedLong:string = ''
  constructor(private http:HttpClient) { 
    // this.locations.push(new Locations("Metrotown", 49.2276, -123.0076))
    // this.locations.push(new Locations("SFU Burnaby", 49.2781, -122.9199))
    // this.locations.push(new Locations("Stanley Park", 49.300054, -123.148155))
  }

  get() {
    return this.locations
  }

  add(loc:string, lat:number, long:number) {  
    this.locations.push(new Locations(loc, lat, long, 1))
    this.http.put('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/locations/', { "key":"locations", "data":this.locations }).subscribe()
  }
  find(loc:string):Locations {
    return this.locations.filter(l=>{
      return l.name === loc
    })[0]
  }

}
