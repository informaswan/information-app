import { Routes } from '@angular/router';
import { LandingPageComponent } from './informaswan-pages/common/landing-page/landing-page.component';
import { WorkoutExercisesComponent } from './informaswan-pages/athletics/workout-exercises/workout-exercises.component';
import { CocktailListComponent } from './informaswan-pages/alcohol/cocktail-list/cocktail-list.component';
import { HomeCareComparitorsComponent } from './informaswan-pages/health/home-care-comparitors/home-care-comparitors.component';
import { DiscGolfFormComponent } from './informaswan-pages/athletics/disc-golf-form/disc-golf-form.component';
import { HowToPlayCasinoGamesComponent } from './informaswan-pages/gambling/how-to-play-casino-games/how-to-play-casino-games.component';
import { HomeLoanCalcsComponent } from './informaswan-pages/home-owners/home-loan-calcs/home-loan-calcs.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home on empty path
    { path: 'home', component: LandingPageComponent },
    { path: 'muscle-map', component: WorkoutExercisesComponent },
    { path: 'cocktail-search', component: CocktailListComponent },
    { path: 'retirment-cost-compare', component: HomeCareComparitorsComponent },
    { path: 'disc-golf-form', component: DiscGolfFormComponent },
    { path: 'poker-game', component: HowToPlayCasinoGamesComponent },
    { path: 'home-loan-calcs', component: HomeLoanCalcsComponent },
    // { path: 'feedback', component: }
];