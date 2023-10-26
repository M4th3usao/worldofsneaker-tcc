import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Sneaker } from 'src/app/models/Sneaker';
import { SneakerService } from 'src/app/services/sneaker.service';

@Component({
  selector: 'app-sneaker-list',
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.css']
})
export class SneakerListComponent {

  ELEMENT_DATA: Sneaker[] = []
  
  displayedColumns: string[] = ['id', 'nome','nomeCategoria', 'marca', 'quantidade', 'acoes'];
  dataSource = new MatTableDataSource<Sneaker>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: SneakerService){ }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Sneaker>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
