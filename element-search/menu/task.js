'use strict';

const menu_link = Array.from(document.querySelectorAll('.menu__link'));;

for (let i = 0; i < menu_link.length; i++) {
  menu_link[i].onclick = function () {
    const menu_main = this.closest('.menu_main');
    const menu_sub = this.closest('.menu__item').querySelector('.menu_sub');

    if (menu_main.classList.contains('menu menu_main')) {
      menu_main.classList.toggle('menu_active')
    }
    menu_sub.classList.toggle('menu_active')
    return false;
  }
}

//const menu_link = document.getElementsByClassName('menu__link');

// for (let i = 0; i < menu_link.length; i++) {
//   menu_link[i].onclick = function () {
//     const menu_main = this.closest('ul');
//     const menu_sub = this.parentElement.querySelector('.menu_sub');

//     if (menu_main.className === 'menu menu_main') {
//       const menu_active = menu_main.querySelector('.menu_active');
//       if (menu_active && (menu_active !== menu_sub))
//         menu_active.className = 'menu menu_sub';
//     }

//     if (menu_sub.className === 'menu menu_sub') {
//       menu_sub.className = 'menu menu_sub menu_active';
//     } else {
//       menu_sub.className = 'menu menu_sub';
//     }
//     return false;
//   }
// }
// const menus = document.querySelectorAll('.menu_main');

// menus.forEach(
//   (menuMainItem) => {
//     const links = menuMainItem.querySelectorAll(".menu__link");
//     const menu = menuMainItem.querySelectorAll(".menu");
//     const allSub = Array.from(menuMainItem.querySelectorAll(".menu_sub"));

//     function closingSubMenus(subMenu) {
//       allSub.forEach(
//         (item) => {
//           if (item === subMenu) {
//             return;
//           }

//           item.classList.remove("menu_active")
//         }
//       )
//     }

//     for (let index = 0; index < links.length; index++) {
//       const link = links[index];
//       link.onclick = () => {

//         const linkParent = link.parentElement;
//         const menuSub = linkParent.querySelector(".menu_sub");
//         closingSubMenus(menuSub);

//         if (menuSub) {
//           menuSub.classList.toggle("menu_active");
//           return false;
//         }
//       }
//     };
//   })


// другой подход к решению
            // const menuSub = link.nextElementSibling;
            // if(menuSub.classList.contains("menu_sub")) {
            //     menuSub.classList.toggle("menu_active")
            // }
            // return false