import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterButtonComponent } from './shared/character-button.component';
import { SortCharactersPipe } from './shared/sort-characters.pipe';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersComponent, CharacterComponent, CharacterListComponent, CharacterButtonComponent, SortCharactersPipe]
})
export class CharactersModule { }
