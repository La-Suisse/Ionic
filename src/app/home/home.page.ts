import { Component } from '@angular/core';
import { AppBack } from '../services/service.module';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';
import { AppComponent } from '../app.component';


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
  theme = "";
  id: any

  constructor(
    private router: Router,
    private appService: AppBack,
    public toastController: ToastController,
    private nativeStorage: NativeStorage,
    private keyboard: Keyboard,
    private themeDetection: ThemeDetection,
    private app: AppComponent, ) {
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
    this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
      console.log(res);
      this.app.blackWhite();
    })
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
    for (let u of users) {
      if (u.identifiant == this.userForm) {
        identifiantTest = u.identifiant
        if (u.motDePasse == this.mdpForm) {
          mdpTest = u.identifiant
          this.type = u.type
          this.nativeStorage.setItem('id', u.id)
          for (var f of this.allfiches) {
            if (f.id == u.id) {
              this.fichesUser = f.fiches
            }
          }
        }
      }
    }
    if (identifiantTest == mdpTest && this.type == "Visiteur") {
      this.etat = "Connecté"
      this.presentToast();
      let param: NavigationExtras = { state: this.fichesUser };
      this.router.navigate(['/listfiche'], param);
      this.userForm = ""
      this.mdpForm = ""
    }
    else {
      this.mdpForm = ""
      this.etat = "Tentative de connexion...";
      this.presentToast();
    }
  }

}
