// categories.js

import { 
  retrievedCategories,
  retrievedCategoriesFailure
} from './../actions/categoriesActions';

import {
  baseUrl,
  headers
} from './../utils/config';

let credential = 'true';
if(baseUrl === `${process.env.REACT_APP_BACKEND}`) credential = 'include';

export const getCategories = () => {
   fetch(`${baseUrl}/categories`, { credentials: credential, headers } 
         ).then((response) => { return response.text()})
        .then((data) => retrievedCategories(data) )
        .catch((errors) => retrievedCategoriesFailure(errors) )
}
