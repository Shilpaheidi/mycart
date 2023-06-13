import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
     MatToolbarModule, 
     MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule
  ],
  exports: [
    MatToolbarModule, 
    MatButtonModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,
     FormsModule
  ]
})
export class MaterialModule { }
