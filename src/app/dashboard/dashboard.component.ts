import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Character} from '../../../models/character.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dbResetSubscription: Subscription;

  characters: Observable<Character[]>;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private characterService: ChararcterService,) {
  }

  ngOnInit() {
  }

}
