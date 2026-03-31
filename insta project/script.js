let array = [
  {
    dp: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww",
    storyimg: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww",
    profilename: "jane"
  },
  {
    dp: "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww",
    storyimg: "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww",
    profilename: "Angela"
  },
  {
    dp: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww",
    storyimg: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww",
    profilename: "Eva Green"
  },
  {
    dp: "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
    storyimg: "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
    profilename: "Denise Richards"
  },

  {
    dp: "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyimg: "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilename: "Molly Watson"
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyimg: "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilename: "Carey"
  },
];

let storys = document.querySelector(".storys");
let html = ``;
array.forEach(function (elem, idx) {
  html += `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
             <p>${elem.profilename}</p>
          </div>`
});

document.querySelector(".storys").innerHTML = html;

let allstory = document.querySelectorAll(".story");
// let curser = document.querySelector(".curser");
let footer = document.querySelector(".hero-bottom");


let isdown = false;
let dragging = false;

// storys.addEventListener('mousemove', function(dets){
//   if(!isdown) return;
//   dragging = true; 
//   storys.scrollLeft += dets.movementX * -2;
// })


storys.addEventListener('mousedown', function () {
  isdown = true;
})
storys.addEventListener('mouseup', function () {
  isdown = false;
})
storys.addEventListener('mouseleave', function () {
  isdown = false;
})
storys.addEventListener('mousemove', function (dets) {
  console.log(dets);
  if (!isdown) return;
  storys.scrollLeft += dets.movementX * -2;
})


let overlay = document.querySelector(".story-profile-section");
let overlayimg = document.querySelector(".story-profile img");
let storydp = document.querySelector(".dp img");
let heart = document.querySelector("#heart");

let comment = document.querySelector(".story-option input");
let storytap = 0;
let commenttap = 0;
let storytimer;


overlayimg.addEventListener('click', function () {
      overlay.style.display = "none";
      footer.style.display = "flex"
      clearTimeout(storytimer);
})

comment.addEventListener('focus', function () {
    clearTimeout(storytimer); // Auto-close timer ko pause kar do
    console.log("Comment mode: Timer paused");
});
comment.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        console.log("Enter pressed! Story will close in 5 seconds...");

        clearTimeout(storytimer); 
        
        storytimer = setTimeout(function () {
            overlay.style.display = "none";
            console.log("Story closed after typing.");
        }, 5000); 

        comment.blur(); 

        comment.value = ""; 
    }
});
allstory.forEach(function (elem,ind) {
  elem.addEventListener('click', function (dets) {
    console.log("story clicked", ind);
    let img = array[ind].storyimg;
    let dpimg = array[ind].dp;
    overlayimg.src = img;
    storydp.src = dpimg;
    elem.style.borderColor = "#c7c7c7";
    overlay.style.display = "block";
    footer.style.display = "none";

    clearTimeout(storytimer);

      storytimer = setTimeout(function () {
        overlay.style.display = "none";
        footer.style.display = "flex"
      }, 8000);
    
  })
})
let heartclick = 0;
heart.addEventListener('click', function () {
  console.log(heartclick);
  if (heartclick == 0) {
    heart.style.color = "red";
    heartclick = 1;
  }
  else {
    heart.style.color = "white";
    heartclick = 0;
  }

})

let array1 = [
  {
    dp: "https://pbs.twimg.com/media/Gsie3eCX0AAs5Tk.jpg",
    heroimg: "https://pbs.twimg.com/media/Gsie3eCX0AAs5Tk.jpg",
    disc: "Kohli ka aggression aur Bengaluru ka junoon, kya is baar cup....",
    username:"RCB"
  },
  {
    dp: "https://imgs.search.brave.com/WkOYSZ1Kv3ECxWSLxSZkQicBclxkKhGx_jfBh4CA5Qo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTWd4anFo/UkhiSXUzT1ZucTQ3/Y21LYzB2aXRqOGNt/VDhXVUJEVVUtLWVp/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkx/Y0d4di9ZV1F1ZDJs/cmFXMWxaR2xoL0xt/OXlaeTkzYVd0cGNH/VmsvYVdFdlpXNHZN/Qzh3WVM5YS9aVzVr/WVhsaFgyRnpYMDFL/L0xtcHdaV2M",
    heroimg: "https://imgs.search.brave.com/WkOYSZ1Kv3ECxWSLxSZkQicBclxkKhGx_jfBh4CA5Qo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTWd4anFo/UkhiSXUzT1ZucTQ3/Y21LYzB2aXRqOGNt/VDhXVUJEVVUtLWVp/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkx/Y0d4di9ZV1F1ZDJs/cmFXMWxaR2xoL0xt/OXlaeTkzYVd0cGNH/VmsvYVdFdlpXNHZN/Qzh3WVM5YS9aVzVr/WVhsaFgyRnpYMDFL/L0xtcHdaV2M",
    disc: "MJ in the Spider-Man universe refers to Mary Jane Watson, the iconic main love interest of Peter Parker/Spider-Man, though her full name and role vary across different media.....",
    username:"MJ Watson"
  },
  {
    dp: "https://images.unsplash.com/photo-1761751844072-120967509161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    heroimg: "https://images.unsplash.com/photo-1761751844072-120967509161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    disc: "Ronaldo ki speed aur Messi ka magic, football ki is deewangi mein....",
    username:"Ronaldo"
  },
  {
    dp: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
    heroimg: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
    disc: "Manchester United is nicknamed Red Devils, while Arsenal is known as the Gunners....",
    username:"Manchester United"
  },
  {
    dp: "https://www.mumbaiindians.com/static-assets/waf-images/43/d7/4f/4-3/592-444/jAOBCFNpWI.png",
    heroimg: "https://www.mumbaiindians.com/static-assets/waf-images/43/d7/4f/4-3/592-444/jAOBCFNpWI.png",
    disc: "5 baar ki champions aur paltan ka power, Rohit ke bina MI....",
    username:"MI"
  },
  {
    dp: "https://images.jansatta.com/2025/11/Mohammed-Kaif-On-Chennai-Super-Kings-Batting-Line-Up.jpg",
    heroimg: "https://images.jansatta.com/2025/11/Mohammed-Kaif-On-Chennai-Super-Kings-Batting-Line-Up.jpg",
    disc: "Dhoni ki chaturayi aur Yellow Army ka shor, Anbuden mein phir se....",
    username:"CSK"
  },
];

let herohtml = "";

array1.forEach(function (elem, ind) {

  herohtml += `<div class="hero-story">
                <div class="hero-story-intro">
                 <div class="intro1">
                    <div class="hero-story-dp">
                    <img src="${elem.dp}" alt="">
                    </div>
                    <div class="hero-story-name">
                      <p>${elem.username}</p>
                      <p>5 days ago</p>
                    </div>
                </div>
                <div class="intro2">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
               </div>
               <div class="hero-story-img">
                <img id="${ind}" src="${elem.dp}" alt="">
                <i class="fa-solid fa-heart db-hero-story"></i>
               </div>
               <div class="hero-story-like-section">
              <div class="like-section-1">
                <i class="fa-solid fa-heart hero-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-arrows-rotate hero-repost">
                <i class="fa-solid fa-check hero-repost-icon"></i>
                </i>
                <i class="fa-solid fa-paper-plane hero-share"></i>
              </div>
              <div class="like-section-2">
                <i class="fa-solid fa-bookmark hero-save"></i>
              </div>
                <div class="like-section-disc">
                <p>${elem.disc}</p>
              </div>
            </div>
            </div>
            `
})

document.querySelector(".hero-story-section").innerHTML = herohtml;
let heroheartclick = 0;
let heroheart = document.querySelectorAll(".hero-heart");
heroheart.forEach(function (elem) {
  elem.addEventListener('click', function () {
    if (heroheartclick === 0) {
      elem.style.color = "red";
      heroheartclick = 1;
    }
    else {
      elem.style.color = "grey";
      heroheartclick = 0;
    }
  })
})

let allPost = document.querySelectorAll('.hero-story');

allPost.forEach(function(elem){
  let heartTimeout;
  let eachPost = elem.querySelector('.hero-story-img');
  let dbimg = elem.querySelector('.db-hero-story');
  let likebtn = elem.querySelector('.hero-heart')
  eachPost.addEventListener('dblclick',function(){
  clearTimeout(heartTimeout);

  dbimg.style.display = "block";
  dbimg.style.opacity = 1;

  likebtn.style.color = "red";
  setTimeout(function(){
    dbimg.style.display = "none";
  },2000);
})
});





let herosave = document.querySelectorAll(".hero-save");
let herosaveclick = 0;

herosave.forEach(function (elem) {
  elem.addEventListener('click', function () {
    if (herosaveclick == 0) {
      elem.style.color = "black";
      herosaveclick = 1;
    }
    else {
      elem.style.color = "grey";
      herosaveclick = 0;
    }
  })
})

document.querySelectorAll(".hero-repost-icon").forEach(function (elem) {
  elem.style.display = "none";
})


let herorepost = document.querySelectorAll(".hero-repost");
herorepost.forEach(function (elem) {
  elem.addEventListener('click', function () {
    let tick = elem.querySelector(".hero-repost-icon")
    if (tick.style.display == "none") {
      tick.style.display = "block";
      elem.style.transform = "rotate(360deg)";
      console.log("repost")
    }
    else {
      tick.style.display = "none";
      elem.style.transform = "rotate(0deg)";
    }
  })
})

let hero = document.querySelector(".hero-story-section");
let istap = false;

hero.addEventListener('mousedown', function () {
  istap = true;
})
hero.addEventListener('mouseup', function () {
  istap = false;
})
hero.addEventListener('mouseleave', function () {
  istap = false;
})
hero.addEventListener('mousemove', function (dets) {
  console.log(dets);
  if (!istap) return;
  hero.scrollTop -= dets.movementY * 1.5;
})


let reelsbtn = document.querySelector(".reels-btn");
let homebtn = document.querySelector(".home-btn");
let reels = document.querySelector(".video-page");


homebtn.addEventListener('click',function(){
  reels.style.display = "none";
  reels.style.opacity = 0;
  footer.style.backgroundColor = ""
  footer.style.color = ""
  document.querySelectorAll(".vid").forEach(function(v) {
    v.pause();
    v.currentTime = 0;
    
  })
})


// video - section


let videos = [
  { src: "videos/reel1.mp4", user: "nature_lover", likes: "1.2M" },
  { src: "videos/reel2.mp4", user: "travel_diaries", likes: "856K" },
  { src: "videos/reel3.mp4", user: "nature_lover", likes: "1.2M" },
  { src: "videos/reel4.mp4", user: "travel_diaries", likes: "856K" },
  { src: "videos/reel5.mp4", user: "nature_lover", likes: "1.2M" },
  { src: "videos/reel6.mp4", user: "travel_diaries", likes: "856K" },
  { src: "videos/reel7.mp4", user: "nature_lover", likes: "1.2M" },
  { src: "videos/reel8.mp4", user: "travel_diaries", likes: "856K" },
]

let videopage = document.querySelector(".video-page");
let videohtml = ""
let timeout;

videos.forEach(function(elem,ind){
  videohtml += `<div class="video">
        <video class="vid" src="${elem.src}" id="vid${ind}"
          loop
          unmute
          playsinline
          ></video>
           <div class="reel-dp-section">
        <div class="reel-dp">
          <img
            src="https://images.unsplash.com/photo-1568739253582-afa48fbcea47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww"
            alt="Reel User DP">
          <p class="reel-dp-name">hello</p>
        </div>
        <button class="follow-btn">Follow</button>
      </div>
      <div class="reel-option">
        <i class="ph ph-heart reel-heart"></i>
        <i class="ph ph-chat-circle"></i>
        <i class="ph ph-arrows-clockwise"></i>
        <i class="ph ph-paper-plane-tilt"></i>
        <i class="ph ph-bookmark-simple reel-save"></i>
        <i class="ph ph-dots-three-vertical"></i>
        <div class="reel-music"></div>
        </div>
        <div class="reel-dbl"><i class="fa-solid fa-heart"></i></div>
      </div>
      `
})

videopage.innerHTML = videohtml;

reelsbtn.addEventListener('click', function() {
  reels.style.display = "flex";
  reels.style.opacity = 1;
  footer.style.backgroundColor = "black";
  footer.style.color = "white";

  let allVids = document.querySelectorAll(".vid");
  allVids[0].play().catch(function(){});

  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      let v = entry.target;
      if(entry.isIntersecting) {
        v.play().catch(function(){});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, { root: videopage, threshold: 0.6 });

  allVids.forEach(function(v) { observer.observe(v); });

  allVids.forEach(function(elem) {

    // ✅ Single click — play/pause
    elem.addEventListener('click', function() {
      if(elem.paused) {
        elem.play();
        elem.muted = false;
      } else {
        elem.pause();
      }
    });

    // ✅ Double tap — heart animation
    elem.addEventListener('dblclick', function() {
      clearTimeout(timeout);

      let video = elem.closest('.video');
      let reeldbl = video.querySelector('.reel-dbl');
      let reellike = video.querySelector('.reel-heart');

      // ✅ Class toggle — animation restart
      reeldbl.classList.remove('animate');
      void reeldbl.offsetWidth; // reflow
      reeldbl.classList.add('animate');

      // ✅ Like add karo
      reellike.classList.add('ph-fill');
      reellike.classList.remove('ph');
      reellike.classList.add('liked');

      timeout = setTimeout(function() {
        reeldbl.classList.remove('animate');
      }, 1000);
    });

  });

  // ✅ Heart toggle — like/unlike
  document.querySelectorAll('.reel-heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
      if(heart.classList.contains('liked')) {
        // Unlike
        heart.classList.remove('ph-fill');
        heart.classList.remove('liked');
        heart.classList.add('ph');
      } else {
        // Like
        heart.classList.remove('ph');
        heart.classList.add('ph-fill');
        heart.classList.add('liked');
      }
    });
  });

  // ✅ Save toggle
  document.querySelectorAll('.reel-save').forEach(function(save) {
    save.addEventListener('click', function() {
      if(save.classList.contains('clicked')) {
        save.classList.remove('ph-fill');
        save.classList.remove('clicked');
        save.classList.add('ph');
      } else {
        save.classList.remove('ph');
        save.classList.add('ph-fill');
        save.classList.add('clicked');
      }
    });
  });

});