let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true,
  });

// Feeback review 
// trgthuhg
var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        O: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    });

// Manh 
// Gioi thieu
// Cuộn mượt mà khi nhấn vào nút "Biết thêm"
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Hiển thị thông báo khi nhấn vào các biểu tượng
document.querySelectorAll('.icons').forEach(function(icon) {
    icon.addEventListener('click', function() {
        alert(this.getAttribute('data-message'));
    });
});



// // Tìm kiếm
// document.addEventListener('DOMContentLoaded', () => {
//     const searchBox = document.getElementById('search-box');
//     const suggestionsBox = document.getElementById('suggestions');

//     // Sample data for suggestions
//     const products = [
//         "SỮA RỬA MẶT",
//         "TONNER",
//         "DƯỠNG ẨM",
//         "SERUM",
//         "ỐP SON RHODE",
//         "SON DƯỠNG KHÔNG MÀU",
//         "SON DƯỠNG"
//     ];

//     searchBox.addEventListener('input', () => {
//         const query = searchBox.value.toLowerCase();
//         suggestionsBox.innerHTML = '';

//         if (query.length > 0) {
//             const filteredProducts = products.filter(product => 
//                 product.toLowerCase().includes(query)
//             );

//             filteredProducts.forEach(product => {
//                 const suggestionItem = document.createElement('div');
//                 suggestionItem.textContent = product;
//                 suggestionsBox.appendChild(suggestionItem);

//                 suggestionItem.addEventListener('click', () => {
//                     searchBox.value = product;
//                     suggestionsBox.innerHTML = '';
//                     suggestionsBox.style.display = 'none';
//                     window.location.href = `sproduct.html?product=${encodeURIComponent(product)}`;
//                 });
//             });

//             suggestionsBox.style.display = 'block';
//         } else {
//             suggestionsBox.style.display = 'none';
//         }
//     });

//     searchBox.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             const query = searchBox.value;
//             window.location.href = `sproduct.html?product=${encodeURIComponent(query)}`;
//         }
//     });

//     document.getElementById('close').addEventListener('click', () => {
//         searchBox.value = '';
//         suggestionsBox.innerHTML = '';
//         suggestionsBox.style.display = 'none';
//     });
// });


