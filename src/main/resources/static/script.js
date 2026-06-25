renderHeroSlide(heroIndex);


//navbar dropdown
document.addEventListener("click", function (e) {
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