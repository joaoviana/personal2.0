const goToSection = ((toSection, fromSection) => {
    let toSectionElem = document.getElementById(`section${toSection}`);
    let fromSectionElem = document.getElementById(`section${fromSection}`);
    toSectionElem.classList.remove("section--disabled");
    toSectionElem.classList.add("section--active");
});