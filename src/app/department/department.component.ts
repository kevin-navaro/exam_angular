import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {I_region} from "../models/i_region";
import {HttpClientService} from "../services/http-client.service";
import {I_departement} from "../models/i_departement";
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit
{
  title : string = 'Les départements de France'
  regions : I_region[] = [];
  departements: I_departement[] = [];

  constructor
  (
    private httpService: HttpClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    let url: string = 'https://geo.api.gouv.fr/regions';
    this.activatedRoute.params.subscribe((params) => {
      if (params['departements']) {
        this.departements = params['departements'];
        url = 'https://geo.api.gouv.fr/departements' + this.departements;
        this.title = 'Les pays de ' + this.departements;
      }
    });
    this.httpService.getObject<I_departement[]>(url)
      .subscribe((response) => {
        this.departements = response;
      });
  }
}
