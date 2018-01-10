// categories.js

import { 
  retrievedCategories,
  retrievedCategoriesFailure
} from './../actions/categoriesActions';

const baseUrl =  `${process.env.REACT_APP_BACKEND}`;

const headers = { 
  'Authorization': 'whatever-you-want'
};

export const getCategories = () => {
   fetch(`${baseUrl}/categories`, { credentials: 'include', headers } 
         ).then((response) => { return response.text()})
        .then((data) => retrievedCategories(data) )
        .catch((errors) => retrievedCategoriesFailure(errors) )
}
