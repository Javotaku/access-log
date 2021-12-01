import { Component, OnInit } from '@angular/core';
import { AcceslogService } from '../acceslog.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  dataTable: any;

  constructor(private logService: AcceslogService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    try{
      const accessData: any = await this.logService.getAccessLog();
      const { status, message, data } = accessData;
      if(status){
        this.dataTable = data;
        console.log("Arreglo de access log:", this.dataTable);
      }
    } catch (e){
      console.log('Error al obtener data: ', e);
    }
  }

}
