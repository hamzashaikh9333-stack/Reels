let reelsData = [
  {
    username: "rahul_sharma",
    video: "vid1.mp4",
    likeCount: 12450,
    commentCount: 342,
    shareCount: 120,
  },
  {
    username: "aisha_khan",
    video: "vid6.mp4",
    likeCount: 9820,
    commentCount: 210,
    shareCount: 85,
  },
  {
    username: "john_doe",
    video: "vid7.mp4",
    likeCount: 15400,
    commentCount: 512,
    shareCount: 260,
  },
  {
    username: "neha_verma",
    video: "vid8.mp4",
    likeCount: 7600,
    commentCount: 198,
    shareCount: 64,
  },
  {
    username: "aisha_khan",
    video: "vid1.mp4",
    likeCount: 9820,
    commentCount: 210,
    shareCount: 85,
  },
  {
    username: "john_doe",
    video: "vid2.mp4",
    likeCount: 15400,
    commentCount: 512,
    shareCount: 260,
  },
  {
    username: "neha_verma",
    video: "vid3.mp4",
    likeCount: 7600,
    commentCount: 198,
    shareCount: 64,
  },
  {
    username: "arjun_mehta",
    video: "vid4.mp4",
    likeCount: 18320,
    commentCount: 689,
    shareCount: 310,
  },
];
let sum = "";
reelsData.forEach(function (dets, idx) {
  sum += `<div class="container">
          <div class="video-div">
            <video src="media/${dets.video}"></video>
            <div id="top-div">
              <h1>Reels<i class="ri-arrow-drop-down-line"></i></h1>
              <h1><i class="ri-volume-mute-fill mute-btn"></i></h1>
            </div>
            <div id="bottom-div">
              <div class="top-div1">
                <img
                  src="https://i.pinimg.com/736x/16/08/4e/16084e282405aeadf9ca4bf5c1e89147.jpg"
                  alt=""
                />
                <h4>${dets.username}</h4>
                <button>Follow</button>
              </div>
              <div class="center-div1">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit..
                </p>
              </div>
              <div class="bottom-div1">
                <h1><i class="ri-home-4-line"></i></h1>
                <h1><i class="ri-search-line"></i></h1>
                <h1><i class="ri-add-box-line"></i></h1>
                <h1><i class="ri-tiktok-line"></i></h1>
                <h1><i class="ri-account-circle-line"></i></h1>
              </div>
            </div>
            <div id="right-div">
              <h1>
                <i id="like" class="ri-poker-hearts-line"><h3>${dets.likeCount}</h3></i>
              </h1>
              <h1>
                <i class="ri-chat-3-line"><h3>${dets.commentCount}</h3></i>
                
              </h1>
              <h1>
                <i class="ri-share-line"><h3>${dets.shareCount}</h3></i>
                
              </h1>
              <h1><i class="ri-more-2-line"></i></h1>
            </div>
          </div>
        </div>`;
});
let section = document.querySelector("section");

section.innerHTML = sum;

let like = document.querySelectorAll("#like");
like.forEach(function (elem) {
  let liked = false;
  let countText = elem.querySelector("h3");
  let count = Number(countText.innerText);

  elem.addEventListener("click", function () {
    liked = !liked;

    if (liked) {
      elem.classList.remove("ri-poker-hearts-line");
      elem.classList.add("ri-heart-fill");
      elem.style.color = "pink";
      count += 1;
    } else {
      elem.classList.remove("ri-heart-fill");
      elem.classList.add("ri-poker-hearts-line");
      elem.style.color = "white";
      count -= 1;
    }
    countText.innerText = count;
  });
});

// =====================================

let muteBtns = document.querySelectorAll(".mute-btn");

muteBtns.forEach(function (btn) {
  let video = btn.closest(".video-div").querySelector("video");

  video.muted = true;

  btn.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      btn.classList.remove("ri-volume-mute-fill");
      btn.classList.add("ri-volume-up-fill");
    } else {
      video.muted = true;
      btn.classList.remove("ri-volume-up-fill");
      btn.classList.add("ri-volume-mute-fill");
    }
  });
});
// ========================================

let videos = document.querySelectorAll("video");

let observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        videos.forEach(function (vid) {
          vid.pause();
        });
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  },
  {
    threshold: 0.6,
  }
);

videos.forEach(function (vid) {
  observer.observe(vid);
});
