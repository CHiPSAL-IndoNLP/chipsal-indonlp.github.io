document.addEventListener("click", function (event) {
    document.querySelectorAll(".navigation-dropdown[open]").forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdown.removeAttribute("open");
        }
    });
});
