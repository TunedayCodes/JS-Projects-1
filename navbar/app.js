// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToogle = document.querySelector('.nav-toogle');
const links = document.querySelector('.links');

navToogle.addEventListener('click', function(){
   // ## option 1 of toggling the navbar
//    if(links.classList.contains('show-links')){
//       links.classList.remove('show-links')
//    } else {
//       links.classList.add('show-links');
//    }
// });
      // ## option 2 of toggling the navbar
links.classList.toggle('show-links');
});