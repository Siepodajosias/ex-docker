import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarteInteractive} from './carte-interactive';

describe('CarteInteractiveComponent', () => {
	let component: CarteInteractive;
	let fixture: ComponentFixture<CarteInteractive>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CarteInteractive]
		})
			.compileComponents();

		fixture = TestBed.createComponent(CarteInteractive);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
