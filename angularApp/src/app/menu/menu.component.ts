import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";
import { HttpClient } from "@angular/common/http";
import * as $ from "jquery";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

}
