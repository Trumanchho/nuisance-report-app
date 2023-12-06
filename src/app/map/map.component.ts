import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../locations.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map
  icon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15],
    popupAnchor:   [0, -20],
  })
  constructor(private ls:LocationService) {}

  ngOnInit(): void {
    this.showMap()
    this.updateClickedLoc()
    this.putLabels()
  }

  showMap() {
    this.map = L.map('mapid').setView([49.27, -123], 11);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',

    }).addTo(this.map);
  }

  putLabels() {
    for (let loc of this.ls.get()) {
      if (loc.count > 0) {
        L.marker([loc.lat,loc.long], {icon: this.icon}).addTo(this.map).bindPopup(loc.name + ": " + loc.count + " nuisance reports")
      }
    }
  }

  updateClickedLoc() {
    this.map.on('click', (e)=>{
      this.ls.clickedLat = e.latlng.lat.toString()
      this.ls.clickedLong = e.latlng.lng.toString()
      L.popup().setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(this.map)
    })
  }

}
