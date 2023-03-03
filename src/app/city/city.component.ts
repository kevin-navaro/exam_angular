import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {I_region} from "../models/i_region";
import {HttpClientService} from "../services/http-client.service";
import {I_departement} from "../models/i_departement";
import {I_commune} from "../models/i_commune";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit
{
  title : string = 'Les communes de France'
  regions : I_region[] = [];
  departements: I_departement[] = [];
  communes: I_commune[] = [];
  comms: undefined;

  constructor
  (
    private httpService: HttpClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    let url: string = 'https://geo.api.gouv.fr/regions';
    this.activatedRoute.params.subscribe((params) => {
      if (params['communes']) {
        this.communes = params['comms'];
        url = 'https://geo.api.gouv.fr/communes' + this.communes;
        this.title = 'Les pays de ' + this.communes;
      }
    });
    this.httpService.getObject<I_commune[]>(url)
      .subscribe((response) => {
        this.communes = response;
      });
  }
}
