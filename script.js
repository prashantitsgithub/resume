document.addEventListener("DOMContentLoaded", () => {
    // Create and append the scroll-to-top button
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.innerText = "⬆️ Top";
    scrollToTopButton.className = "scrollToTopButton";
    scrollToTopButton.style.display = "none"; // Initially hidden

    document.body.appendChild(scrollToTopButton);

    // Show button when user scrolls down 100px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor link behavior
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
