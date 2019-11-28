import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'listfiche',
    loadChildren: () => import('./listfiche/listfiche.module').then( m => m.ListfichePageModule)
  },
  {
    path: 'ficheinfos',
    loadChildren: () => import('./ficheinfos/ficheinfos.module').then( m => m.FicheinfosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
