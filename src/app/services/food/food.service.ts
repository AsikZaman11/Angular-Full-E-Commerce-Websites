import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id== id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
  // return tag == "All"?this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
  if (tag == 'All')
  return this.getAll()
  else
  return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      {name: 'All', count:8},
      {name: 'dress', count: 6},
      {name: 'tshirt', count: 2},
      {name: 'shirt', count: 2},
      {name: 'pant', count: 2},
      {name: 'shoe', count: 2},
    ]
  }
  getAll():Foods[]{
    return[
      {
        id:1,
        name:'tshirt',
        cookTime:'10-20',
        price:200,
        favorite:true,
        orgins:['england','bd'],
        star:4.5,
        imageUrl:'/assets/tshirt.jpg',
        tags:['tshirt', 'dress']
      },
      {
        id:2,
        name:'tshirt',
        cookTime:'10-20',
        price:200,
        favorite:false,
        orgins:['italy','bd'],
        star:4.5,
        imageUrl:'/assets/tshirt.png',
        tags:['tshirt', 'dress']
      },
      {
        id:3,
        name:'shirt',
        cookTime:'10-20',
        price:200,
        favorite:true,
        orgins:['italy'],
        star:4.5,
        imageUrl:'/assets/shirt.jpg',
        tags:['shirt', 'dress']

      },
      {
        id:4,
        name:'shirt',
        cookTime:'10-20',
        price:200,
        favorite:false,
        orgins:['bd'],
        star:4.5,
        imageUrl:'/assets/shirt2.jpg',
        tags:['shirt', 'dress']
      },
      {
        id:5,
        name:'pant',
        cookTime:'10-20',
        price:200,
        favorite:false,
        orgins:['pakistan','bd'],
        star:4.5,
        imageUrl:'/assets/pant.png',
        tags:['pant', 'dress']

      },
      {
        id:6,
        name:'pant',
        cookTime:'10-20',
        price:200,
        favorite:true,
        orgins:['italy','chaina'],
        star:4.5,
        imageUrl:'/assets/pant2.jpg',
        tags:['pant', 'dress']

      },
      {
        id:7,
        name:'shoe',
        cookTime:'10-20',
        price:200,
        favorite:false,
        orgins:['indai','bd'],
        star:4.5,
        imageUrl:'/assets/shoe.jpg',
        tags:['shoe']

      },
      {
        id:8,
        name:'shoe',
        cookTime:'10-20',
        price:200,
        favorite:false,
        orgins:['italy','bd'],
        star:4.5,
        imageUrl:'/assets/shoe2.png',
        tags:['shoe']

      },
      {
        id:8,
        name:'shoe',
        cookTime:'10-20',
        price:200,
        favorite:false,
        orgins:['italy','bd'],
        star:4.5,
        imageUrl:'/assets/shoe3.jpg',
        tags:['shoe']

      }
    
    ]
  }
}
