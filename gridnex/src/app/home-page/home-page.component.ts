import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public games: any = [];
  public catGames: any = [];
  public categories: any = [];
  public years: any = [];
  public gameDetails: any[];

  public rates = ['Popular', 'Upcoming', 'Bestselling', 'Alphabetically', 'User Rating', 'All releses']


  constructor(private gameService: GamesService,
    public router: Router,) { }

  ngOnInit(): void {
    this.getGames();
    this.getAllCategories();
    // ****
    for (var i = 1990; i <= 2040; i++) {
      this.years.push({ value: i });
    }
  }
  // ** Get All Games Detailes**//
  getGamesDetailes() {
    this.gameService.getGameDetails().subscribe((response: any) => {
      response.data.forEach(game => {
        this.gameDetails.push(game);
      });
    });
  }
  // **Get All Games  **//
  getGames() {
    this.gameService.getAllGames().subscribe((response: any) => {
      response.data.forEach(game => {
        this.games.push(game);
      });
      console.log('this all games', this.games);
    });
  }
  // ** Get All Categories **//
  getAllCategories() {
    this.gameService.getAllCategories().subscribe((response: any) => {
      response.data.forEach(cat => {
        this.getGamesByCategories(cat.categoryId)
        this.categories.push(cat);
      });
      console.log('this all Categories', this.categories);

    });
  }
  // ** Get Games By Categories**//
  getGamesByCategories(id) {
    this.gameService.getACategorywithGames(id).subscribe((response: any) => {
      if (response.data != null) {
        response.data.gameCategory.forEach(cat => {
          this.catGames.push(cat);
        });
      }
      console.log('this all Games By Categories', this.catGames);

    });
  }
}
