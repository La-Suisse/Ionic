import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficheinfos',
  templateUrl: './ficheinfos.page.html',
  styleUrls: ['./ficheinfos.page.scss'],
})
export class FicheinfosPage implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
      this.fiches = this.router.getCurrentNavigation().extras.state;
      console.log(this.fiches);
    });
  }
  fiches: any;

  ngOnInit() {
  }

}
