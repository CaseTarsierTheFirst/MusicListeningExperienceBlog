// List of articles with tags (add new ones here)
const articles = [
    { 
        title: "Roxette - Look Sharp!", 
        url: "Articles/Roxette_Look_Sharp!.html", 
        image: "images/roxettelooksharp.jpg", 
        date: "March 17, 2025", 
        tags: ["Roxette", "Pop Rock", "1988"] 
    }
    // Add more articles as needed
];

// Function to generate article cards
function loadArticles(filteredArticles = articles) {
    const container = document.getElementById("articles-grid");

    // Check if the container is found
    if (!container) {
        console.error('Could not find the articles-grid container!');
        return;
    }

    // Clear existing content
    container.innerHTML = "";

    // Loop through the articles array (or filtered articles) and create the article cards
    filteredArticles.forEach(article => {
        const articleCard = `
            <div class="article-card">
                <a href="${article.url}">
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                    <h3>${article.title}</h3>
                    <p class="article-date">📅 ${article.date}</p>
                    <p class="article-tags">Tags: ${article.tags.join(", ")}</p>
                </a>
            </div>
        `;
        container.innerHTML += articleCard;
    });
}

// Function to search articles based on the input text
function searchArticles() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    
    // Filter articles based on tags
    const filteredArticles = articles.filter(article => {
        return article.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    });

    // Reload articles with the filtered list
    loadArticles(filteredArticles);
}

// Run the function when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    loadArticles();  // Load all articles initially
});
