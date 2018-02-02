// categories.js

import { 
  retrievedCategories,
  retrievedCategoriesFailure
} from './../actions/categoriesActions';

import {
  baseUrl,
  headers,
  getCred,
} from './../utils/config';

export const getCategories = () => {
   fetch(`${baseUrl}/categories`, { credentials: getCred(), headers } 
         ).then((response) => { console.log('in here'); return response.text()})
        .then((data) => retrievedCategories(data) )
        .catch((errors) => retrievedCategoriesFailure(errors) )
}
