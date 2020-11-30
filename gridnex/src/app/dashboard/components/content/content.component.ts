import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';


import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  gameForm: FormGroup;
  currentDate = new Date();
  public categories: any = [];
  public categoryId: string;

  developers = ['Dev One', 'Dev Two', 'Dev Tree'];
  platforms = ['Platform One', 'Platform Two', 'Platform Tree'];
  studio = ['Studio One', 'Studio Two', 'Studio Tree'];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private gameService: GamesService,) { }

  ngOnInit() {
    // ** INIT**/
    this.getAllCategories();
    // ** Game Form**/



    this.gameForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      release_date: ['', Validators.required],
      link: ['', Validators.required],
      video: ['', Validators.required],
      category_name: ['', Validators.required],
      studio_name: ['', Validators.required],
      developer_name: ['', Validators.required],
      platform_name: ['', Validators.required],

    });

  }
  // ** Get All Categories **//
  getAllCategories() {
    this.gameService.getAllCategories().subscribe((response: any) => {
      response.data.forEach(cat => {
        this.categories.push(cat);
      });
      console.log('this all Categories', this.categories);

    });
  }

  // ** ADD Game Method **/
  addGame() {
    let body = {
      'name': this.gameForm.value.name,
      'description': this.gameForm.value.description,
      'release_date': this.gameForm.value.release_date,
      'link': this.gameForm.value.link,
      'video': this.gameForm.value.video,
      'gameCategory': {
        'name': this.gameForm.value.category_name,
      },
      'gameStudio':
      {
        'studio': {
          'name': this.gameForm.value.studio_name,
        }
      },
      'gamedevelopper':
      {
        'developper': {
          'name': this.gameForm.value.developer_name,
          'gameCategory': [

          ],
          'urd': this.currentDate,
          'isDeleted': false,
        }
      },
      'gamePlatforms':
      {
        'platform': {
          'name': this.gameForm.value.platform_name,
          'gamePlatforms': [],
          'urd': this.currentDate,
          'isDeleted': false,
        }
      },
    }
    console.log(body);
    this.gameService.addGames(body).subscribe((response: any)=>{
      // Swal.fire(
      //   'Well registered!',
      //   'success'
      // )
      this.router.navigate(['/dashboard']);

    }, (error: any) => {
      console.log(error);
    });



  }
}


