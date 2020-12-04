import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  getserivce:any
  getratingNumber:any
  currentRate = 6;
  constructor(private dataservice: DataService,config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.dataservice.getFeedback().subscribe(res=>{
      this.getserivce=res
      this.getserivce.map((ress:any)=>{
        this.getratingNumber=ress.rating
      })
    })
    
  }

}
