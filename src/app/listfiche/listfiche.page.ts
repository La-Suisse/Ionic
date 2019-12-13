import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HomePageModule } from '../home/home.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AppBack } from '../services/service.module';
import { AppComponent } from '../app.component';
import { ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-listfiche',
  templateUrl: './listfiche.page.html',
  styleUrls: ['./listfiche.page.scss'],
})
export class ListfichePage implements OnInit {

  id: any
  allfiches: any
  fichesUser: any
  message: any

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private nativeStorage: NativeStorage,
    private appService: AppBack,
    private app: AppComponent,
    private toastController: ToastController,
    private keyboard: Keyboard) {
    this.activeRoute.queryParams.subscribe(params => {
      this.items = this.router.getCurrentNavigation().extras.state;
    });
  }
  items: any;
  ngOnInit() {
    this.redirect()
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message,
      duration: 2000
    });
    toast.present();
  }
  redirect() {
    if (this.items == undefined) {
      this.reload()
      if (this.items == undefined) {
        this.router.navigate(['home']);
      }
    }
  }
  reload() {
    this.nativeStorage.getItem('id')
      .then(
        data => {
          this.id = data
          console.log(this.id)
          this.appService
            .getFiches()
            .subscribe(
              data => {
                this.allfiches = data;
                console.log(this.allfiches)
                for (var f of this.allfiches) {
                  if (f.id == this.id) {
                    this.items = f.fiches
                  }
                }
              },
              error => {
                this.message = "Impossible de récupérer les fiches"
                this.presentToast()
              }
            );
        },
        error => {
          this.message = "Impossible de récupérer votre ID"
          this.presentToast()
        }
      );

  }
  deco() {
    this.router.navigate(['home']);
    this.nativeStorage.remove('id')
  }
  theme() {
    this.nativeStorage.setItem('theme', "dark")
    this.app.blackWhite();
    //this.keyboard.setKeyboardStyle('dark');
  }
}
