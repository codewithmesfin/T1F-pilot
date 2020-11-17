import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

//define Interfaces
export interface PeriodicElement {
  idCode: number;
  projectName: string;
  projectCategory: string;
  projectSubcategory: string;
  address: string,
  project: string;
  projectStatus: string;
  contactInfo: string;
  status: string;
  dateAdded: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    idCode: 1,
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    address: "AA, ET",
    project: '12',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 2,
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    address: "AA, ET",
    project: '2',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 3,
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    address: "AA, ET",
    project: '9',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 4,
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    address: "AA, ET",
    project: '21',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 5,
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    address: "AA, ET",
    project: '43',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  displayedColumns: string[] = [
    'idCode',
    'projectName',
    'projectCategory',
    'projectSubcategory',
    'contactInfo',
    'address',
    'project',
    'projectStatus',
    'status',
    'dateAdded'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
