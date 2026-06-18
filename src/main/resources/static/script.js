//placeholder, all of the datas will be taken from database
const heroSlides = [
    {
        image: "https://images.pexels.com/photos/8428059/pexels-photo-8428059.jpeg?auto=compress&cs=tinysrgb&w=1400",
        heading: "Fotoğrafla Beraber Değişiyor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sem quis sollicitudin aliquam, ante mauris faucibus velit, ac congue lacus risus ac nibh. Aenean congue tortor ac turpis gravida porta in a justo. Mauris ullamcorper ex et viverra malesuada.",
        link: "#"
    },
    {
        image: "https://images.pexels.com/photos/33175653/pexels-photo-33175653.jpeg?auto=compress&cs=tinysrgb&w=1400",
        heading: "El Sıkışan Adamlar.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sem quis sollicitudin aliquam, ante mauris faucibus velit, ac congue lacus risus ac nibh. Aenean congue tortor ac turpis gravida porta in a justo.",
        link: "#"
    },
    {
        image: "https://images.pexels.com/photos/5398881/pexels-photo-5398881.jpeg?auto=compress&cs=tinysrgb&w=1400",
        heading: "Hala El Sıkışıyorlar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, sem quis sollicitudin aliquam, ante mauris faucibus velit, ac congue lacus risus ac nibh. Aenean congue tortor ac turpis gravida porta in a justo.",
        link: "#"
    }
];

let heroIndex = 0;

function renderHeroSlide(index){
    const slide = heroSlides[index];
    document.getElementById("heroImage").src = slide.image;
    document.getElementById("heroHeading").textContent = slide.heading;
    document.getElementById("heroText").textContent = slide.text;
    document.getElementById("heroLink").href = slide.link;
}

function showPreviousHeroSlide(){
    heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    renderHeroSlide(heroIndex);
}

function showNextHeroSlide(){
    heroIndex = (heroIndex + 1) % heroSlides.length;
    renderHeroSlide(heroIndex);
}

document.getElementById("heroPrev").addEventListener("click", showPreviousHeroSlide);
document.getElementById("heroNext").addEventListener("click", showNextHeroSlide);

renderHeroSlide(heroIndex);