import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCategoriesComponent,
    UpdateCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
