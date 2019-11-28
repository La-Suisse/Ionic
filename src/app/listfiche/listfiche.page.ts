import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listfiche',
  templateUrl: './listfiche.page.html',
  styleUrls: ['./listfiche.page.scss'],
})
export class ListfichePage implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
      this.items = this.router.getCurrentNavigation().extras.state;
    });
  }
  items: any;
  ngOnInit() {
  }

  OnCLick(fiche) {
    let param: NavigationExtras = { state: fiche };
    this.router.navigate(['/ficheinfos'], param);
  }
}
