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
  id: any;
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  cle = "41lac27ga35";

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
        if (u.motDePasse == this.cryptageVigenere(this.mdpForm)) {
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

  cryptageVigenere(mot: string) {
    let leMotCode = "";
    let longueurCle = leMotCode.length;
    let longueurMot = mot.length;
    let tmp = 0;
    let i = 0;

    while (i < longueurMot) {
      leMotCode += this.cryptageLettre(mot[i], this.cle[tmp]);
      tmp++;
      if (tmp == longueurCle) {
        tmp = 0;
      }
      i++;
    }
    return leMotCode;
  }

  rangDansAlphabet(lettre: string) {
    let N = this.alphabet.length;
    let j = 0;
    let rang = 0;
    while (j < N) {
      if (lettre == this.alphabet[j]) {
        rang = j;
      }
      j++;
    }
    return rang;
  }

  lettreAlphabet(rang: number) {
    let N = this.alphabet.length;
    if (rang >= N) {
      rang -= N;
    }
    if (rang < 0) {
      rang += N;
    }
    return this.alphabet[rang];
  }

  cryptageLettre(lettre: string, cle: string) {
    return this.lettreAlphabet(this.rangDansAlphabet(lettre) + this.rangDansAlphabet(cle));
  }
}
