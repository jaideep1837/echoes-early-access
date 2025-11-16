// Mobile drawer toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
mobileBtn && mobileBtn.addEventListener('click', ()=> mobileDrawer.classList.toggle('hidden'));

// Countdown (set a target date: Oct 8, 2025 09:00)
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
next.onclick = () => {
    nextSlide();
    resetAutoplay();
};

prev.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
    resetAutoplay();
};

// --- AUTOPLAY ---
let autoplay = setInterval(nextSlide, 3000); // Slide every 3s

function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 3000);
}

// Keep alignment consistent on window resize
window.addEventListener("resize", updateSlider);

const eventImages = {
  kalakriti: [
    "assets/kal1.jpg",
    "assets/kal2.jpg",
    "assets/kal3.jpg"
  ],
  starnight: [
    "assets/star1.jpg",
    "assets/star2.jpg",
    "assets/star3.jpg"
  ],
  sports: [
    "assets/sports1.jpg",
    "assets/sports2.jpg",
    "assets/sports3.jpg"
  ]
};

const modal = document.getElementById("eventModal");
const modalGallery = document.getElementById("modalGallery");
const modalTitle = document.getElementById("modalTitle");

const cards = document.querySelectorAll(".event-card");

let modalIndex = 0;
let currentImages = [];

cards.forEach(card => {
  card.addEventListener("click", () => {
    const eventName = card.dataset.event;
    modalTitle.innerText = eventName.replace(/^\w/, c => c.toUpperCase());
    
    currentImages = eventImages[eventName];
    modalGallery.innerHTML = currentImages
      .map(src => `<img src="${src}" class="w-full h-80 object-cover flex-shrink-0" />`)
      .join("");

    modal.classList.remove("hidden");
    modal.classList.add("flex");   // <-- ADD THIS
    modalIndex = 0;
    updateModalGallery();
      
  });
});

function updateModalGallery() {
  modalGallery.style.transform = `translateX(-${modalIndex * 100}%)`;
}

document.getElementById("modalNext").onclick = () => {
  modalIndex = (modalIndex + 1) % currentImages.length;
  updateModalGallery();
};

document.getElementById("modalPrev").onclick = () => {
  modalIndex = (modalIndex - 1 + currentImages.length) % currentImages.length;
  updateModalGallery();
};

document.getElementById("modalClose").onclick = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");   // <-- ADD THIS
  };
  

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");   // <-- ADD THIS
    }    
});
