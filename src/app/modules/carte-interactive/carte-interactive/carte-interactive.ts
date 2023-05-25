import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit, Type } from '@angular/core';
import RegionGeojson from '../../../../assets/json/RegionGeojson.json';
import * as L from 'leaflet';
import * as geojson from 'geojson';

import 'leaflet-easybutton';

@Component({
	selector: 'app-carte-interactive',
	templateUrl: './carte-interactive.html',
	styleUrls: ['./carte-interactive.scss']
})
export class CarteInteractive implements OnInit {



	constructor() {}

	ngOnInit(): void {

	}
}
