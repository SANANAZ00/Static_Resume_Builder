function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section instanceof HTMLElement) {
        section.classList.toggle("hidden");
    }
}
