import Rmap from '../../node_modules/ramda/src/map';

export function authorsFormattedForDropdown(authors) {
     
   return  Rmap(author => {
        return {
          value: author.id,
          text: author.firstName + ' ' + author.lastName
        };
    }, authors );   
 
}
