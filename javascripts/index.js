// Games data

var titles = {
    0: {
        title: "Resident Evil 4",
        subTitle: "Action, Adventure, Horror",
        desc: "Six years have passed since the biological disaster in Raccoon City. Agent Leon S. Kennedy, one of the survivors of the incident, has been sent to rescue the president's kidnapped daughter. He tracks her to a secluded European village, where there is something terribly wrong with the locals.",
        videoURL: "re4.mp4"
    },
    1: {
        title: "Assassin's Creed",
        subTitle: "Action, Adventure",
        desc: "Experience the story of Basim, a cunning street thief seeking answers and justice as he bustling streets of ninth-century Baghdad. Through a mysterious, organization known as the Hidden Ones, he will become a deadly Master Assassin and change his fate in ways he never could have imagined.",
        videoURL: "ac.mp4"
    },
    2: {
        title: "Mortal Kombat",
        subTitle: "Action, Fighting",
        desc: "Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay. For the first time, players can choose from multiple variations of each character impacting both strategy and fighting style. See Health Warnings for important health information before using this product.",
        videoURL: "mk1.mp4"
    },
    3: {
        title: "God of War",
        subTitle: "Action, open World",
        desc: "Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms. Throughout stunning mythological landscapes, they’ll face fearsome enemies as they prepare for the showdown of their lives.",
        videoURL: "gowr.mp4"
    },
    4: {
        title: "GTA V",
        subTitle: "Action, Adventure, Open World",
        desc: "GRAND THEFT AUTO V : When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other and ultimate shared Online experience.",
        videoURL: "gtav.mp4"
    },
    5: {
        title: "Cyberpunk 2077",
        subTitle: "Role Playing, Open World",
        desc: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Upgraded with next-gen in mind and featuring free additional content, customize your character and playstyle as you take on jobs",
        videoURL: "cp.mp4"
    },
}


// Swiper
// Create swiper for thumbs

var thumbsSwiper = new Swiper(".thumbsSwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    breakpoints: {
        200: {
            slidesPerView: 1.5
        },
        400: {
            slidesPerView: 1.5
        },
        600: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 5
        },
    },
    freeMode: true,
    watchSlidesProgress: true,
}); 



const swiper = new Swiper('.bannerSwiper', {
   
    spaceBetween: 0,
    effect: "fade",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // for thumb as slider

    thumbs:{
        swiper: thumbsSwiper
    }
});


// Show overlay and Video content

var overlay = document.querySelector(".overlay");
var videoContainer = document.querySelector("#movie-trailer");
var showTrailer = () => {

    var index = swiper.activeIndex; //acgiveIndex is a swiper parameter
    videoContainer.innerHTML = `
    <video controls autoplay id="video">
    <source src="css/assets/vid/${titles[index].videoURL}" type="video/mp4">
    </video>
    `
    overlay.classList.add('show')
}

// Close ovrelay

var closeOverlay = () => {
    // pause the video
    var video = document.querySelector("#video");
    video.pause();
    overlay.classList.remove('show')
}

// Change Title 

var changeTitle = (index) => {
    var title = document.querySelector('#title');
    var subTitle = document.querySelector('#sub-title');
    var desc = document.querySelector('#desc');
    title.innerHTML = `<h1>${titles[index].title}</h1>`;
    subTitle.innerHTML = `<p>${titles[index].subTitle}</p>`;
    desc.innerHTML = `<p>${titles[index].desc}</p>`;
}

swiper.on('activeIndexChange', function() {
    changeTitle(swiper.activeIndex);
})

// Search Overlay

// Open the full screen search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
  
// Close the full screen search box
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// Screen Scroll prograssbar

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

