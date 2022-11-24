'use strict'

debugger

// let rotator = Array.from(document.querySelectorAll('.rotator__case'));
// let rotatorIndex = 0;

// function rotation() {
//   rotator.forEach((el) => {
//     el.classList.remove('rotator__case_active');
//   });

//   if (rotatorIndex + 1 == rotator.length) {
//     rotatorIndex = 0;
//   } else {
//     rotatorIndex++;
//   }
//   rotator[rotatorIndex].classList.toggle('rotator__case_active');
// }
// setInterval(rotation, 1000);
//------------------------------------------------------------------
// const rotators = document.getElementsByClassName(`rotator`);

// for (const rotator of rotators) {
//   const childrenItems = rotator.children;

//   let rotatorCase = 1;  //запуск бесконечного цикла с "Лучший программист на земле"
//   let dataSpeed = 1000; //первая скорость для запуска бесконечного цикла

//   function rotatorChange() {

//     for (let child of childrenItems) {
//       child.classList.remove(`rotator__case_active`);
//     }

//     childrenItems[rotatorCase].classList.add(`rotator__case_active`);

//     let dataColor = childrenItems[rotatorCase].getAttribute("data-color");
//     childrenItems[rotatorCase].style.color = `${dataColor}`;

//     dataSpeed = childrenItems[rotatorCase].getAttribute("data-speed");

//     if (rotatorCase < childrenItems.length - 1) {
//       rotatorCase++;
//     } else {  
//       rotatorCase = 0;
//     }
//     setTimeout(rotatorChange, `${dataSpeed}`);
//   }  
//   setTimeout(rotatorChange, `${dataSpeed}`);
// }
//--------------------------------------------------------
const rotators = Array.from(document.querySelectorAll(".rotator"));

rotators.forEach((itemRotators) => {
  const allCase = Array.from(itemRotators.children);

  function closeItems() {
    allCase.forEach((item) => {
      item.classList.remove("rotator__case_active");
    });
  };

  let countCase = 0;

  function run() {
    if (!allCase.length) {
      return;
    };
    closeItems();

    const timeout = allCase[countCase].dataset.speed;
    allCase[countCase].classList.add("rotator__case_active");
    allCase[countCase].style.color = allCase[countCase].dataset.color;

    countCase++;
    if (countCase === allCase.length) {
      countCase = 0;
    };
    setTimeout(run, timeout);
  };
  run();
});