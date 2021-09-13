export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  alert: any;
}

export const products = [
  {
    id: 1,
    name: 'Phone XXLl',
    price: 98,
    description: 'A large phone with one of the best screens',
    alert: 'YES'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    alert: null
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 5299,
    description: '',
    alert: 'YES'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
