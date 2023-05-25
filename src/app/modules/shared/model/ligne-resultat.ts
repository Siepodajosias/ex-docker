import { ResultatCandidat } from './resultat-candidat';
import { Commune } from './commune';
import { LieuVote } from './lieu-vote';
import { CommissionLocale } from './commission-locale';

export class LigneResultat {
	region: string;
	commune: Commune;
	commissionLocale: CommissionLocale;
	lieuVote: LieuVote;
	departement: string;
	totalParticipants: number;
	totalVotants: number;
	totalInscrits: number;
	nombreInscrits: number;
	nombreBulletinsNuls: number;
	nombreBulletinsBlancs: number;
	suffragesExprimes: number;
	resultatCandidats: ResultatCandidat[];
	tauxParticipation: number;
	nombreBureauVote: number;
	nombreLieuVote: number;
	nombreFemmes: number;
	nombreHommes: number;
	sousPrefecture: any;
	meilleurCandidat: ResultatCandidat;
}
