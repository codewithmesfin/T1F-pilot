import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  idCode: number;
  projectTitle: string;
  projectName: string;
  projectCategory: string;
  projectSubcategory: string;
  project: string;
  projectStatus: string;
  contactInfo: string;
  status: string;
  dateAdded: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    idCode: 1,
    projectTitle: 'Lorem ipsum',
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    project: '12',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 2,
    projectTitle: 'Lorem ipsum',
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    project: '2',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 3,
    projectTitle: 'Lorem ipsum',
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    project: '9',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 4,
    projectTitle: 'Lorem ipsum',
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
    project: '21',
    projectStatus: "Lorem ipsum",
    status: 'Shortlisted 1',
    dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 5,
    projectTitle: 'Lorem ipsum',
    projectName: "Lorem ipsum",
    projectCategory: 'Lorem ipsum',
    projectSubcategory: "Lorem ipsum",
    contactInfo: 'mesfin@gmail.com',
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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  displayedColumns: string[] = [
    'idCode',
    'projectTitle',
    'projectName',
    'projectCategory',
    'projectSubcategory',
    'contactInfo',
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
