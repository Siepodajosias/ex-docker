import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from './urls';
import { DonneesFiltre } from '../model/donnees-filtre';
import { TableauBord } from '../model/tableau-bord.model';
import { Resultat } from '../model/resultat';
import { VoixPartis } from '../model/voix-partis.model';
import { TableauResultat } from 'src/app/modules/shared/model/tableau-resultat';
import { DetailResultat } from 'src/app/modules/shared/model/detail-resultat';

@Injectable({
	providedIn: 'root'
})
export class ResultatService {

	constructor(private http: HttpClient) {
	}

	/**
	 * Recupère les résultats des bureaux de vote
	 */
	recupererListeResultats(donneesFiltre: DonneesFiltre): Observable<Resultat[]> {
		return this.http.get<Resultat[]>(urls.resultat + '/carte?tour=' + donneesFiltre.tour +
				'&type=' + 'REGIONALE' +
				'&decoupage=' + 'REGION' +
				'&annee=' + donneesFiltre.annee);
	}

	recupererListeResultat1(donneesFiltre: DonneesFiltre): Observable<TableauResultat> {
		const httpParams = DonneesFiltre.construireParametres(donneesFiltre.annee,
				donneesFiltre.tour, donneesFiltre.circonscription,
				donneesFiltre.commissionLocale);
		return this.http.get<any>(urls.resultat + '/global/lister', { params: httpParams });
	}

	recupererListeResultatParBureauVote(donneesFiltre: DonneesFiltre): Observable<DetailResultat[]> {
		return this.http.get<DetailResultat[]>(urls.resultat + '/resultat-par-bureau?commissionLocale='
				+ donneesFiltre.commissionLocale +
				'&tour=' + donneesFiltre.tour +
				'&type=' + 'REGIONALE' +
				'&annee=' + donneesFiltre.annee);
	}

	/**
	 * Recupère l'ensemble des partis politique et leur couleur respective'
	 */
	recupererListeResultatPartiPolitique(donneesFiltre: DonneesFiltre): Observable<VoixPartis[]> {
		return this.http.get<VoixPartis[]>(urls.VoixPartis + '/'
				+ donneesFiltre.annee +
				'/' + 'REGIONALE' +
				'/?tour=' + donneesFiltre.tour);
	}

	/**
	 * Recupère les résultats des bureaux de vote
	 */
	recupererListeResultatPourTableauDeBord(donneesFiltre: DonneesFiltre): Observable<TableauBord> {
		const httpParams = DonneesFiltre.construireParametres(donneesFiltre.annee,
				donneesFiltre.tour,
				donneesFiltre.circonscription,
				donneesFiltre.commissionLocale);
		return this.http.get<TableauBord>(urls.resultat + '/tableauBord', { params: httpParams });
	}
}
