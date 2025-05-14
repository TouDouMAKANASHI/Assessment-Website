// Elements
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const pageTitle = document.getElementById('page-title');

// Detect current page
const currentPage = window.location.pathname.split("/").pop();

// Map pages to names
const pageNames = {
  "index.html": "Home",
  "Page2.html": "About Greenland",
  "Page3.html": "Tourist Destinations",
  "Page4.html": "Nuuk",
  "Page5.html": "Danish Kingdom",
  "Page6.html": "Language and People"
};

// Set page title
pageTitle.textContent = pageNames[currentPage] || "Unknown Page";

// Highlight active link
const linkId = "link-" + currentPage.replace(".html", "");
const activeLink = document.getElementById(linkId);
if (activeLink) {
  activeLink.classList.add('active');
}

// Show sidebar on hover
hamburger.addEventListener('mouseenter', () => {
  sidebar.classList.add('show');
});

// Hide sidebar when mouse leaves sidebar
sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('show');
});
