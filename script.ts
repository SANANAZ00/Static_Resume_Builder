function toggleSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section instanceof HTMLElement) {
        section.classList.toggle("hidden");
    }
}








