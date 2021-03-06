import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { DisplayFlavorsComponent } from './display-flavors.component';
import { AddFlavorComponent } from './add-flavor.component';
import { EditDetailsComponent } from './edit-details.component';
import { FilternessPipe } from './filterness.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DisplayFlavorsComponent, AddFlavorComponent, EditDetailsComponent, FilternessPipe ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
