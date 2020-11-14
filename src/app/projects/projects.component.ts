import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  idCode: number;
  talentName: string;
  professions: string;
  contactInfo: string;
  project: string;
  status: string
  active: string
  dateAdded: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    idCode: 1, talentName: 'lorem', professions: 'graphics design',
    contactInfo: 'mesfin@gmail.com', project: '12',
    status: 'Shortlisted 1', active: 'active', dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 2, talentName: 'ipsum', professions: 'software engineer',
    contactInfo: 'mesfin@gmail.com',
    project: '3',
    status: 'Hired', active: 'inactive', dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 3, talentName: 'lorem', professions: 'graphics design',
    contactInfo: 'mesfin@gmail.com', project: '12',
    status: 'Shortlisted 1', active: 'active', dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 4, talentName: 'ipsum', professions: 'software engineer',
    contactInfo: 'mesfin@gmail.com',
    project: '3',
    status: 'Hired', active: 'inactive', dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 5, talentName: 'lorem', professions: 'graphics design',
    contactInfo: 'mesfin@gmail.com', project: '12',
    status: 'Shortlisted 1', active: 'active', dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 6, talentName: 'ipsum', professions: 'software engineer',
    contactInfo: 'mesfin@gmail.com',
    project: '3',
    status: 'Hired', active: 'inactive', dateAdded: new Date().toISOString().slice(0, 10)
  },

  {
    idCode: 7, talentName: 'lorem', professions: 'graphics design',
    contactInfo: 'mesfin@gmail.com', project: '12',
    status: 'Shortlisted 1', active: 'active', dateAdded: new Date().toISOString().slice(0, 10)
  },
  {
    idCode: 8, talentName: 'ipsum', professions: 'software engineer',
    contactInfo: 'mesfin@gmail.com',
    project: '3',
    status: 'Hired', active: 'inactive', dateAdded: new Date().toISOString().slice(0, 10)
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
    'idCode', 'talentName', 'professions', 'contactInfo',
    'project', 'status', 'active', 'dateAdded'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
