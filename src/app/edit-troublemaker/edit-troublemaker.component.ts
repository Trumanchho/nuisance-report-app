import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Troublemaker } from '../troublemaker';
import { TmServiceService } from '../tm-service.service';
import { LocationService } from '../locations.service';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-troublemaker',
  templateUrl: './edit-troublemaker.component.html',
  styleUrls: ['./edit-troublemaker.component.css']
})
export class EditTroublemakerComponent {
  id:number = Number(this.ActivatedRoute.snapshot.params['id'])
  troublemaker:Troublemaker
  passwordObj:any

  constructor(private ActivatedRoute:ActivatedRoute, private tmS:TmServiceService, 
              private router:Router, private ls:LocationService, private http:HttpClient) {
    this.troublemaker = this.tmS.find(this.id)
  }


  async checkPass() {
    //fcab0453879a2b2281bc5073e3f5fe54
    let password = prompt("Enter NCT Password: ", "Password")
    let url:string = 'https://api.hashify.net/hash/md5/hex?value=' + password

    this.passwordObj = await firstValueFrom(this.http.get(url).pipe(map(res=>{return res})))
    if (this.passwordObj.Digest === "fcab0453879a2b2281bc5073e3f5fe54") {
      return true
    }
    return false
  }

  async changeStatus() {
    if (await this.checkPass()) {
      if (this.troublemaker.resolved === false) {
        this.troublemaker.resolved = true
      } else {
        this.troublemaker.resolved = false
      }
      this.http.put('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/tm_list/', { "key":"tm_list", "data":this.tmS.troublemakers }).subscribe()
    } else {
      alert("Incorrect Password!")
    }
  }

  async deleteTm() {
    if (await this.checkPass()) {
      if (confirm("Confirm delete?")===true) {
        this.ls.find(this.troublemaker.location).count--
        this.http.put('https://272.selfip.net/apps/JhREgg7DcQ/collections/test_data/documents/locations/', { "key":"locations", "data":this.ls.locations }).subscribe()
        this.tmS.delete(this.troublemaker.id)
        this.router.navigate(['/troublemakers'])
      }
    } else {
      alert("Incorrect Password!")
    }
  }
}
