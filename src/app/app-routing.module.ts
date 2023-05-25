import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/shared/component/main-page/main-page.component';

const routes: Routes = [
	{
		path: 'connexion',
		loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'main', component: MainPageComponent,
		children: [
			{
				path: 'tableau-de-bord',
				loadChildren: () => import('./modules/dashbord/dashbord.module').then(m => m.DashbordModule),
			},
			{
				path: 'participation',
				loadChildren: () => import('./modules/participation/participation.module').then(m => m.ParticipationModule),
			},
			{
				path: 'resultat',
				loadChildren: () => import('./modules/resultat/resultat.module').then(m => m.ResultatModule),
			},
			{
				path: 'carte-interactive',
				loadChildren: () => import('./modules/carte-interactive/carte-interactive.module').then(m => m.CarteInteractiveModule),
			}
		]
	},
	{
		path: '**',
		redirectTo: 'connexion',
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: 'connexion',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
