import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private http: HttpClient
  ) { }
  ngOnInit() {
    // $(document).ready(function () {
    //   $('#homeLink').click(function () {
    //     document.getElementById('homeLink').classList.add('active');
    //     document.getElementById('galleryLink').classList.remove('active');
    //     document.getElementById('menuLink').classList.remove('active');
    //     document.getElementById('ourRestrauntLink').classList.remove('active');

    //   });

    //   $('#galleryLink').click(function () {
    //     document.getElementById('homeLink').classList.remove('active');
    //     document.getElementById('galleryLink').classList.add('active');
    //     document.getElementById('menuLink').classList.remove('active');
    //     document.getElementById('ourRestrauntLink').classList.remove('active');
    //   });
    //   $('#menuLink').click(function () {
    //     document.getElementById('homeLink').classList.remove('active');
    //     document.getElementById('galleryLink').classList.remove('active');
    //     document.getElementById('menuLink').classList.add('active');
    //     document.getElementById('ourRestrauntLink').classList.remove('active');

    //   });
    //   $('#ourRestrauntLink').click(function () {
    //     document.getElementById('homeLink').classList.remove('active');
    //     document.getElementById('galleryLink').classList.remove('active');
    //     document.getElementById('menuLink').classList.remove('active');
    //     document.getElementById('ourRestaurantLink').classList.add('active');

    //   });


    // });


    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.navbar').css({ "background-color": "white" });
        $('.navbutton').css({ "color": "black" });

        $('.nav-brandimg').css({ "-webkit-filter": "invert(100%)" });
        $('.navbutton').hover(function () {
          $(this).css("color", "red");
        }, function () {
          $(this).css("color", "black");
        })

        
        } else {
        $('.navbar').css({ "background-color": "transparent" });
        $('.navbutton').css({ "color": "white" });
        $('.nav-brandimg').css({ "-webkit-filter": "invert(0)" });
        $('.navbutton').hover(function(){
          $(this).css("color", "red");
          },function(){
          $(this).css("color", "white");
        })
   
      }
    });
  


  }

}
