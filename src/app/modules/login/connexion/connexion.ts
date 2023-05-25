import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/service/auth.service";
import {Credentials} from "../../shared/model/credentials";
import {NavigationService} from "../../shared/service/navigation.service";

@Component({
	selector: 'app-connexion',
	templateUrl: './connexion.html',
	styleUrls: ['./connexion.scss']
})
export class Connexion {
	loginForm: FormGroup;
	messageActif = false;
	messageErreur: string;
	isLoading = false;

	constructor(private formBuilder: FormBuilder,
				private route: Router,
				private navigationService: NavigationService,
				private authService: AuthService) {}

	ngOnInit(): void {
		if (this.authService.isAuthenticated()) {
			this.navigationService.goToDashbord();
		}
		this.loginForm = this.formBuilder.group({
			login: ['', [Validators.required, Validators.maxLength(255)]],
			motPasse: ['', [Validators.required, Validators.maxLength(255)]]
		});
	}

	/**
	 * Authentifie l'utilisateur.
	 */
	connexion(): void {
		this.navigationService.goToDashbord();
	}
}
