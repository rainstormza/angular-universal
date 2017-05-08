import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

// import { MetaGuard } from '@nglibs/meta';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
	{ path: '**', redirectTo: '' }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);