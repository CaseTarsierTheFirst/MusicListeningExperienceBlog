// List of articles (add new ones here)
const articles = [
    { title: "Roxette - Look Sharp!", url: "Articles/Roxette_Look_Sharp!.html", image: "images/roxettelooksharp.jpg", date: "March 17, 2025" }
];

// Function to generate article cards
function loadArticles() {
    const container = document.getElementById("articles-grid");

    // Check if the container is found
    if (!container) {
        console.error('Could not find the articles-grid container!');
        return;
    }

    // Clear existing content
    container.innerHTML = "";

    // Loop through the articles array and create the article cards
    articles.forEach(article => {
        const articleCard = `
            <div class="article-card">
                <a href="${article.url}">
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                    <h3>${article.title}</h3>
                    <p class="article-date">📅 ${article.date}</p>
                </a>
            </div>
        `;
        container.innerHTML += articleCard;
    });
}

// Run the function when the document is fully loaded
document.addEventListener("DOMContentLoaded", loadArticles);
