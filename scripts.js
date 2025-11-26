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
  oasis: [
    {
      title: "Solo (Classical)",
      img: "assets/oasis-solo-classical.jpg",
      desc: "Classical solo dance performance.",
      link: "https://www.instagram.com/dance_oasis_2725?igsh=MTd1M3RqcWl4bHdlaw=="
    },
    {
      title: "Solo (Others)",
      img: "assets/oasis-solo-others.jpg",
      desc: "Non-classical solo dance styles.",
      link: "https://www.instagram.com/dance_oasis_2725?igsh=MTd1M3RqcWl4bHdlaw=="
    },
    {
      title: "Duet",
      img: "assets/oasis-duet.jpg",
      desc: "Two-performer duet dance performance.",
      link: "https://www.instagram.com/dance_oasis_2725?igsh=MTd1M3RqcWl4bHdlaw=="
    },
    {
      title: "Group",
      img: "assets/oasis-group.jpg",
      desc: "Group dance competition with choreography.",
      link: "https://www.instagram.com/dance_oasis_2725?igsh=MTd1M3RqcWl4bHdlaw=="
    }
  ],
  

  zenith: [
    {
      title: "Solo (Indian)",
      img: "assets/cultural-solo-indian.jpg",
      desc: "Indian solo singing performance.",
      link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0"
    },
    {
      title: "Solo (Western)",
      img: "assets/cultural-solo-western.jpg",
      desc: "Western solo singing competition.",
      link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0"
    },
    {
      title: "Duet Singing",
      img: "assets/cultural-duet.jpg",
      desc: "Two-member duet singing event.",
      link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0"
    },
    {
      title: "Group Singing",
      img: "assets/cultural-group.jpg",
      desc: "Group musical performance.",
      link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0"
    },
    {
      title: "Instrumental & Unorthodox",
      img: "assets/cultural-instrumental.jpg",
      desc: "Instrumental and experimental music acts.",
      link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0"
    },
    {
      title: "Monoact & Mimicry",
      img: "assets/cultural-monoact.jpg",
      desc: "Solo acting, mimicry, and mime performances.",
      link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0"
    },
    {
      title: "Drama",
      img: "assets/cultural-drama.jpg",
      desc: "Drama and theatrical stage performance.",
      link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0"
    }
  ],
  

  psychedelit: [
    { 
      title: "Poetry", 
      img: "assets/lit-poetry.jpg", 
      desc: "Express emotions and stories through powerful spoken or written poetry.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw" 
    },
    { 
      title: "Extempore", 
      img: "assets/lit-extempore.jpg", 
      desc: "Think fast and speak your mind with spontaneous speech delivery.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw" 
    },
    { 
      title: "Debate", 
      img: "assets/lit-debate.jpg", 
      desc: "Engage in intense argumentation and showcase your reasoning skills.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw" 
    },
    { 
      title: "Anime Quiz", 
      img: "assets/lit-animequiz.jpg", 
      desc: "Test your knowledge of anime, characters, themes, and storylines.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw" 
    },
    { 
      title: "Open Mic", 
      img: "assets/lit-openmic.jpg", 
      desc: "A free stage for poems, stories, songs, stand-up or spoken word.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw" 
    },
    { 
      title: "Creative Writing", 
      img: "assets/lit-creativewriting.jpg", 
      desc: "Unleash imaginative storytelling through prompts and themes.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw" 
    },
    { 
      title: "Shayari", 
      img: "assets/lit-shayari.jpg", 
      desc: "Mesmerizing couplets and rhyming verses full of emotion.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw" 
    },
    { 
      title: "ReCreate a Scene", 
      img: "assets/lit-recreate.jpg", 
      desc: "Act out and recreate iconic scenes from movies, anime or dramas.", 
      link: "https://www.instagram.com/psychedelit_aiims_bilaspur?igsh=cXI1NWF4cTQzejAw"
    }
  ],
  

  artandcraft: [
    { title: "Painting", img: "assets/ac-painting.jpg", desc: "Express your creativity using colors and canvas.", link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0" },
    { title: "Sketching", img: "assets/ac-sketcing.jpg", desc: "Create sketches with precision and imagination.", link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0" },
    { title: "Best Out of Waste", img: "assets/ac-waste.jpg", desc: "Craft useful items with recycled materials.", link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0" },
    { title: "Stone Doodles", img: "assets/ac-stonedoodles.jpg", desc: "Decorate stones with doodles and creative patterns.", link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0" },
    { title: "Calligraphy", img: "assets/ac-calligraphy.jpg", desc: "Showcase artistic lettering and penmanship skills.", link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0" },
    { title: "Mehandi", img: "assets/ac-mehandi.jpg", desc: "Creative henna art with traditional and modern designs.", link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0" },
    { title: "Rangoli", img: "assets/ac-rangoli.jpg", desc: "Beautiful rangoli patterns using colors and artistry.", link: "https://www.instagram.com/zenith_aiims?igsh=cmk3dnhjYXA4cml0" },
  ],  

  starnight: [
    {
      title: "Sufi Night",
      img: "assets/sub-star-sufi.jpg",
      desc: "13 Dec • Experience soulful Sufi music with mesmerizing performances.",
      link: "#"
    },
    {
      title: "Band & Standup",
      img: "assets/sub-star-band.jpg",
      desc: "14 Dec • A powerful mix of live band performances and hilarious stand-up acts.",
      link: "#"
    },
    {
      title: "Bollywood & DJ",
      img: "assets/sub-star-bollydj.jpg",
      desc: "15 Dec • Groove to Bollywood hits followed by an electrifying DJ night.",
      link: "#"
    },
    {
      title: "Haryanvi & Violin",
      img: "assets/sub-star-haryanvi.jpg",
      desc: "16 Dec • A fusion of energetic Haryanvi beats and soothing violin melodies.",
      link: "#"
    }
  ],

  sports: [
    { title: "Cricket", img: "assets/s-cricket.png", desc: "Boys: ₹5000 • Girls: ₹2000 | Leather ball & Wind ball", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Football", img: "assets/s-football.png", desc: "9v9 Boys • 7v7 Girls | Offside only for boys", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Badminton", img: "assets/s-badminton.png", desc: "Singles ₹250 • Doubles ₹500 | Mavis 350", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Volleyball", img: "assets/s-volleyball.png", desc: "6v6 • Spartan ball | 3–5 sets", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Basketball", img: "assets/s-basketball.png", desc: "Nivia Pro balls • 4 quarters", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Kabaddi", img: "assets/s-kabaddi.png", desc: "Bonus rule active • Boys & Girls", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Table Tennis", img: "assets/s-tt.png", desc: "Rapid & Blitz formats", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Chess", img: "assets/s-chess.png", desc: "Rapid 10+0 • Blitz 3+2", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Carrom", img: "assets/s-carrom.png", desc: "Singles • Doubles • Mixed", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Athletics", img: "assets/s-athletics.png", desc: "Sprint, Relay, Shotput, Discus, Javelin", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Tug of War", img: "assets/s-tugofwar.png", desc: "10-member team competition", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" },
    { title: "Gym Events", img: "assets/s-gym.png", desc: "Pushups, Pullups, Powerlifting & more", link: "https://www.instagram.com/spardha_aiims_bls?igsh=MTN6aXhjNXA0ZHlrOA==" }
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
