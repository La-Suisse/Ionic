import { Component } from '@angular/core';
import { AppBack } from '../services/service.module';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  userForm: any
  mdpForm: any
  type: any
  idUser;
  allUsers;
  allfiches;
  fichesUser;
  etat = "identifiants inccorect1";

  constructor(private router: Router, private appService: AppBack, public toastController: ToastController) {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.etat,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.getUsers();
    this.getFiches();
  }

  getUsers() {
    this.appService
      .getUsers()
      .subscribe(data => (this.allUsers = data));
  }
  getFiches() {
    this.appService
      .getFiches()
      .subscribe(data => (this.allfiches = data));
  }

  seConnecter() {

    var identifiantTest = "salut";
    var mdpTest = "t"
    var users = this.allUsers
    for (var i = 0; i < 4; i++)
      if (users[i].identifiant == this.userForm) {
        identifiantTest = users[i].identifiant
        if (users[i].motDePasse == this.mdpForm)
          mdpTest = users[i].identifiant
        this.type = users[i].type

        this.fichesUser = this.allfiches[i].fiches
      }
    if (identifiantTest == mdpTest && this.type == "Visiteur") {
      this.etat = "identifiants correcte"
      this.presentToast();

      let param: NavigationExtras = { state: this.fichesUser };
      this.router.navigate(['/listfiche'], param);
    }
    else {
      this.etat = "identifiants inccorect lol";
      this.presentToast();
    }

  }
}
