import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quoteGadget';
  qouteList = []
  randomNum = -1;
  constructor(private http: HttpClient){
    this.http.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10').subscribe((response:any)=>{  
    
    this.randomNum = this.getRndInteger(0, response.length)
    this.qouteList = response;
      console.log(this.qouteList)
      setInterval(()=>{
        if(this.qouteList.length>0){
          this.randomNum = this.getRndInteger(0, this.qouteList.length)
        }
      },10*1000);
    });


  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}



}
