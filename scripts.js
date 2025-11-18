// Mobile drawer toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
mobileBtn && mobileBtn.addEventListener('click', ()=> mobileDrawer.classList.toggle('hidden'));

// Countdown
const target = new Date('2025-12-13T09:00:00');
function updateCountdown(){
  const now = new Date();
  const diff = target - now;
  if(diff<=0) return;
  const days = Math.floor(diff/ (1000*60*60*24));
  const hours = Math.floor((diff/ (1000*60*60))%24);
  const minutes = Math.floor((diff/ (1000*60))%60);
  const seconds = Math.floor((diff/1000)%60);
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ toggles
document.querySelectorAll('.faq-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const body = btn.parentElement.querySelector('.faq-body');
    body.classList.toggle('hidden');
    btn.querySelector('span').innerText = body.classList.contains('hidden') ? '+' : '−';
  });
});


// Gallery slider
const track = document.getElementById("galleryTrack");
const next = document.getElementById("galleryNext");
const prev = document.getElementById("galleryPrev");

const images = track.children;
let index = 0;

function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % images.length;
    updateSlider();
}

// Buttons
next.onclick = () => { nextSlide(); resetAutoplay(); };
prev.onclick = () => { index = (index - 1 + images.length) % images.length; updateSlider(); resetAutoplay(); };

// Autoplay
let autoplay = setInterval(nextSlide, 3000);
function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 3000);
}
window.addEventListener("resize", updateSlider);



// -------------------------------------------
//          SUB-EVENT SLIDER MODAL
// -------------------------------------------

// Sub-event data
const subEvents = {
  kalakriti: [
    { title: "Stage Play", img: "assets/sub-kal1.jpg", desc: "A theatrical performance filled with intense storytelling.", link: "#" },
    { title: "Monoacting", img: "assets/sub-kal2.jpg", desc: "One actor, one spotlight, countless emotions.", link: "#" },
    { title: "Horror Dramatics", img: "assets/sub-kal3.jpg", desc: "Perform spine-chilling acts that push creativity.", link: "#" }
  ],

  starnight: [
    { title: "Pro Night", img: "assets/sub-star1.jpg", desc: "Headline performers bringing energy to the main stage.", link: "#" },
    { title: "DJ Night", img: "assets/sub-star2.jpg", desc: "Dance till midnight with pulsing EDM beats.", link: "#" }
  ],

  sports: [
    { title: "Cricket", img: "assets/s-cricket.png", desc: "Boys: ₹5000 • Girls: ₹2000 | Leather ball & Wind ball", link: "#" },
    { title: "Football", img: "assets/s-football.png", desc: "9v9 Boys • 7v7 Girls | Offside only for boys", link: "#" },
    { title: "Badminton", img: "assets/s-badminton.png", desc: "Singles ₹250 • Doubles ₹500 | Mavis 350", link: "#" },
    { title: "Volleyball", img: "assets/s-volleyball.png", desc: "6v6 • Spartan ball | 3–5 sets", link: "#" },
    { title: "Basketball", img: "assets/s-basketball.png", desc: "Nivia Pro balls • 4 quarters", link: "#" },
    { title: "Kabaddi", img: "assets/s-kabaddi.png", desc: "Bonus rule active • Boys & Girls", link: "#" },
    // { title: "Table Tennis", img: "assets/sports-tt.jpg", desc: "Rapid & Blitz formats", link: "#" },
    // { title: "Chess", img: "assets/sports-chess.jpg", desc: "Rapid 10+0 • Blitz 3+2", link: "#" },
    // { title: "Carrom", img: "assets/sports-carrom.jpg", desc: "Singles • Doubles • Mixed", link: "#" },
    // { title: "Athletics", img: "assets/sports-athletics.jpg", desc: "Sprint, Relay, Shotput, Discus, Javelin", link: "#" },
    // { title: "Tug of War", img: "assets/sports-tugofwar.jpg", desc: "10-member team competition", link: "#" },
    // { title: "Gym Events", img: "assets/sports-gym.jpg", desc: "Pushups, Pullups, Powerlifting & more", link: "#" }
  ]
};


// Modal references
const subModal = document.getElementById("subEventModal");
const subTrack = document.getElementById("subEventTrack");
const subTitle = document.getElementById("subEventTitle");
const subClose = document.getElementById("subEventClose");

let subIndex = 0;
let currentSubEvents = [];


// --- Open Modal ---
// --- Open Modal ---
document.querySelectorAll(".event-card").forEach(card => {
  card.addEventListener("click", () => {
    const eventName = card.dataset.event;

    currentSubEvents = subEvents[eventName];
    if (eventName === "sports") {
      subTitle.innerHTML = `
        SPORTS 
        <a href="assets/sports.pdf" 
           target="_blank" 
           class="ml-3 px-3 py-1 text-sm rounded bg-blue-600 hover:bg-blue-700">
           Rulebook
        </a>
      `;
    } else {
      subTitle.innerText = eventName.toUpperCase();
    }
    

    // Build slider similar to gallery (UPDATED HERE)
    subTrack.innerHTML = currentSubEvents.map(ev => `
      <div class="w-full flex-shrink-0 px-4 flex justify-center">
        <div class="glass rounded-xl overflow-hidden w-[300px]">
          <img src="${ev.img}" class="w-full h-[180px] object-cover" />
          <div class="p-3">
            <h3 class="text-lg font-bold">${ev.title}</h3>
            <p class="text-gray-300 text-sm mt-2">${ev.desc}</p>

            <a href="${ev.link}" 
               class="inline-block mt-4 px-4 py-2 rounded font-semibold 
                      bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm">
              Register
            </a>
          </div>
        </div>
      </div>
    `).join("");

    subIndex = 0;
    updateSubSlider();

    subModal.classList.remove("hidden");
    subModal.classList.add("flex");
  });
});



// --- Slider Functions ---
function updateSubSlider() {
  subTrack.style.transform = `translateX(-${subIndex * 100}%)`;
}

document.getElementById("subNext").onclick = () => {
  subIndex = (subIndex + 1) % currentSubEvents.length;
  updateSubSlider();
};

document.getElementById("subPrev").onclick = () => {
  subIndex = (subIndex - 1 + currentSubEvents.length) % currentSubEvents.length;
  updateSubSlider();
};


// --- Close Modal ---
subClose.onclick = () => {
  subModal.classList.add("hidden");
  subModal.classList.remove("flex");
};

subModal.addEventListener("click", e => {
  if (e.target === subModal) {
    subModal.classList.add("hidden");
    subModal.classList.remove("flex");
  }
});
