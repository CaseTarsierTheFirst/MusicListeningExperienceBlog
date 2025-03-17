// List of articles with tags (add new ones here)
const articles = [
    { title: "Roxette - Look Sharp!", url: "Articles/Roxette_Look_Sharp!.html", 
     image: "images/roxettelooksharp.jpg", 
     date: "March 17, 2025", 
     tags: ["roxette", "1988", "pop", "album review"] },
    {title: "Hoshimachi Suisei - NEXT COLOR PLANET", url: "Articles/Suisei_Next_Colour_Planet.html",
        image: "images/Suisei-NEXT-COLOR-PLANET.jpg",
        date: "March 17, 2025",
        tags: ["Hoshimachi Suisei", "星街すいせい", "2020", "J-Pop", "single review", "music review"]
    }

];

// Function to generate article cards
function loadArticles() {
    const container = document.getElementById("articles-grid");
    container.innerHTML = ""; // Clear existing content

    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredArticles = articles.filter(article => 
        article.tags.some(tag => tag.toLowerCase().includes(searchInput))
    );

    filteredArticles.forEach(article => {
        const articleCard = `
            <div class="article-card">
                <a href="${article.url}">
                    <img src="${article.image}" alt="${article.title}">
                    <h3>${article.title}</h3>
                    <p class="article-date">📅 ${article.date}</p>
                    <p class="article-tags">Tags: ${article.tags.join(", ")}</p>
                </a>
            </div>
        `;
        container.innerHTML += articleCard;
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", loadArticles);

// Function to search articles based on the search input
function searchArticles() {
    loadArticles(); // Re-run the loadArticles function whenever search input changes
}
