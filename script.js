// let modals = document.querySelectorAll(".container-button");

// modals.forEach((item) => {
//   item.addEventListener("mouseenter", function (event) {
//     //console.log(event.target);
//     //item.closest(".content-modal").classList.add("active")
//     //event.target.firstElementChild.classList.add("active");
// });

// item.addEventListener("mouseleave", function (event) {
//     //event.target.firstElementChild.classList.remove("active");
//   });
// });
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', (event) =>{
  console.log("okoko");
  let modalM = document.querySelector('.modal-mobile')

  modalM.style.display = 'flex'; 

  let closeM = document.querySelector('#closeModal-mobile')

  closeM.addEventListener('click', (event)=>{

    let modalM = document.querySelector('.modal-mobile')

  modalM.style.display = 'none';
  })
})