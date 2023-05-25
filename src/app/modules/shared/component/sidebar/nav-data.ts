import {INavBarData} from './helper';

export const NavbarData: INavBarData[] = [
	{
		routerlink: 'tableau-de-bord',
		icon: 'pi pi-chart-bar',
		label: 'TABLEAU DE BORD',
		items: []
	},
	{
		routerlink: 'carte-interactive',
		icon: 'pi pi-map-marker',
		label: 'CARTE INTERACTIVE'
	},
	{
		routerlink: 'resultat',
		icon: 'pi pi-sliders-h',
		label: 'RESULTATS',
		expanded: false,
		items: [
			{
				routerlink: 'resultat/global',
				label: "Résultats globaux",
				icon: 'pi pi-chart-line',
			},
			{
				routerlink: 'resultat/bureau-vote',
				label: "Résultats détaillés",
				icon: 'pi pi-home',
			}
		]
	},
	{
		routerlink: 'participation',
		icon: 'pi pi-send',
		label: 'PARTICIPATIONS',
		items: []
	}
];
