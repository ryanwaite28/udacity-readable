// categories.js

import { 
  retrievedCategories,
  retrievedCategoriesFailure
} from './../actions/categoriesActions';

import {
  baseUrl,
  headers
} from './../utils/config';

export const getCategories = () => {
   fetch(`${baseUrl}/categories`, { credentials: 'include', headers } 
         ).then((response) => { return response.text()})
        .then((data) => retrievedCategories(data) )
        .catch((errors) => retrievedCategoriesFailure(errors) )
}
