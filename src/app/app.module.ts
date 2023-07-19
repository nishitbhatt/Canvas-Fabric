import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppHeaderComponent } from './app-header/app-header.component';
import { EditorComponent } from './editor/editor.component';
import { CanvasBoardComponent } from './canvas-board/canvas-board.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToolMenuComponent } from './tool-menu/tool-menu.component';
import {MatSelectModule} from '@angular/material/select';
import {ClipboardModule} from '@angular/cdk/clipboard';


FormsModule

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    EditorComponent,
    CanvasBoardComponent,

    ToolMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatChipsModule,
    MatDividerModule,
    MatSliderModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    ClipboardModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
