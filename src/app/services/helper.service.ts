import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  recipes = [
    {
      recipeName: 'Burger',
      chefName: 'Manish',
      imageUrl: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'non-vegetarian',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      favrioute: true,
    },
    {
      recipeName: 'Italian Pasta',
      chefName: 'Jaykishan',
      imageUrl: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'vegetarian',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I was popularised in',
      favrioute: true,
    },
    {
      recipeName: 'Chicken Maggie',
      chefName: 'Vrushti',
      imageUrl: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'non-vegetarian',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
      favrioute: false,
    },
  ];
  constructor() { }
}
