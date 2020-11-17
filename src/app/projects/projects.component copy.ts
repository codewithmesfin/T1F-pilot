import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  idCode: number;
  projectTitle: string
  projectName: string
  projectCategory: string
  projectSubcategory: string
  contactInfo: string;
  project: string;
  projectStatus: string
  status: string
  dateAdded: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    idCode: 1, projectTitle: 'lorem', projectName: 'graphics design',
    projectCategory: 'lorem ipsum', projectSubcategory: 'lorem ipsum',
    contactInfo: 'mesfin@gmail.com', project: '12',
    projectStatus: 'Shortlisted 1', status: 'active',
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
    'idCode', 'projectTitle', 'projejctName', 'projectCategory',
    'projectSubcategory', 'contactInfo', 'project', 'projectStatus', 'status', 'dateAdded'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
