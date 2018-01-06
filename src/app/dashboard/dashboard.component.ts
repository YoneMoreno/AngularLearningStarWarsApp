import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Character} from '../../../models/character.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../../../models/character.service';
import {ToastService} from '../core/toast/toast.service';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private dbResetSubscription: Subscription;

  characters: Observable<Character[]>;
  title: string;

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private router: Router,
              private toastService: ToastService) {
  }

  getCharacters() {
    this.characters = this.characterService.getCharacters()
      .do(() => this.toastService.activate('Got characters for the dashboard'))
      .catch(e => {
        this.toastService.activate(`${e}`);
        return Observable.of([]);
      });
  }

  gotoDetail(character: Character) {
    const link = ['/characters', character.id];
    this.router.navigate(link);
  }


  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { title: string }) => {
      this.title = data.title;
    });
    this.getCharacters();
    this.dbResetSubscription = this.characterService.onDbReset.subscribe(() =>
      this.getCharacters()
    );
  }

  trackByCharacters(index: number, character: Character) {
    return character.id;
  }
}
