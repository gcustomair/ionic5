import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { FoodService } from '../food.service';
import { FoodListingPage } from './food-listing.page';
import { FoodListingResolver } from './food-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: FoodListingPage,
    resolve: {
      data: FoodListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    HttpClientModule
  ],
  declarations: [
    FoodListingPage
  ],
  providers: [
    FoodListingResolver,
    FoodService
  ]
})
export class FoodListingPageModule {}
