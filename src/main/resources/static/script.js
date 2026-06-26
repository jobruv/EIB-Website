const heroDataElements = Array.from(document.querySelectorAll('#heroData > div'));
const heroSlides = heroDataElements.map(el => ({
    photoUrl: el.dataset.photo || '',
    title: el.dataset.title || '',
    description: el.dataset.description || '',
    moreInfo: el.dataset.link || '#'
}));
let heroIndex = 0;

function normalizeUrl(url) {
    if (!url) return '#';
    return /^https?:\/\//i.test(url) ? url : 'https://' + url;
}

function renderHeroSlide(index) {
    if (heroSlides.length === 0) return;
    const slide = heroSlides[index];
    const heroImage = document.getElementById('heroImage');
    const heroHeading = document.getElementById('heroHeading');
    const heroText = document.getElementById('heroText');
    const heroLink = document.getElementById('heroLink');

    if (heroImage) {
        heroImage.src = slide.photoUrl;
        heroImage.alt = slide.title;
    }
    if (heroHeading) heroHeading.textContent = slide.title;
    if (heroText) heroText.textContent = slide.description;
    if (heroLink) {
        heroLink.href = normalizeUrl(slide.moreInfo);
        heroLink.textContent = 'Daha fazlası için';
    }
}

function showPreviousHeroSlide() {
    if (heroSlides.length === 0) return;
    heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    renderHeroSlide(heroIndex);
}

function showNextHeroSlide() {
    if (heroSlides.length === 0) return;
    heroIndex = (heroIndex + 1) % heroSlides.length;
    renderHeroSlide(heroIndex);
}

const heroPrevButton = document.getElementById('heroPrev');
const heroNextButton = document.getElementById('heroNext');
const HERO_AUTO_ADVANCE_MS = 10000;
let heroAutoAdvanceTimer = null;

function resetHeroAutoAdvance() {
    if (heroAutoAdvanceTimer) {
        clearInterval(heroAutoAdvanceTimer);
    }
    heroAutoAdvanceTimer = setInterval(showNextHeroSlide, HERO_AUTO_ADVANCE_MS);
}

if (heroPrevButton) heroPrevButton.addEventListener('click', function () {
    showPreviousHeroSlide();
    resetHeroAutoAdvance();
});
if (heroNextButton) heroNextButton.addEventListener('click', function () {
    showNextHeroSlide();
    resetHeroAutoAdvance();
});

renderHeroSlide(heroIndex);
resetHeroAutoAdvance();

window.addEventListener("click", function (e) {
    const isDropdownBtn = e.target.closest(".dropbtn");
    if (!isDropdownBtn && e.target.closest(".dropdown-content") === null) {
        document.querySelectorAll(".dropdown.show").forEach(drop => {
            drop.classList.remove("show");
        });
        return;
    }
    if (isDropdownBtn) {
        e.preventDefault();
        const currentDropdown = isDropdownBtn.closest(".dropdown");
        document.querySelectorAll(".dropdown.show").forEach(drop => {
            if (drop !== currentDropdown) drop.classList.remove("show");
        });
        currentDropdown.classList.toggle("show");
    }
});