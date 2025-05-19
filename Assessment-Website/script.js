const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const pageTitle = document.getElementById('page-title');

// Toggle sidebar on hover
hamburger.addEventListener('mouseenter', () => {
  sidebar.classList.add('show');
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('show');
});

// Set active page title
const currentPage = window.location.pathname.split('/').pop() || "index.html";
const pageNames = {
  "index.html": "Home",
  "page2.html": "History",
  "page3.html": "Tourist Attractions",
  "page4.html": "Culture and Language",
  "page5.html": "Danish Kingdom",
  "page6.html": "Nuuk",
  "contact.html": "Contact",
};

if (pageTitle) {
  pageTitle.textContent = pageNames[currentPage] || "Page";
}
