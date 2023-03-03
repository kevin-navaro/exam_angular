import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {I_region} from "../models/i_region";
import {HttpClientService} from "../services/http-client.service";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit
{
  title : string = 'Les régions de France'
  regions : I_region[] = [];

  constructor
  (
    private httpService: HttpClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    let url: string = 'https://geo.api.gouv.fr/regions';
    this.activatedRoute.params.subscribe((params) => {
      if (params['region']) {
        this.regions = params['region'];
        url = 'https://geo.api.gouv.fr/regions' + this.regions;
        this.title = 'Les pays de ' + this.regions;
      }
    });
    this.httpService.getObject<I_region[]>(url)
      .subscribe((response) => {
        this.regions = response;
      });
  }
}
