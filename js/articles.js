// List of articles with tags (add new ones here)
const articles = [
    {title: "Hoshimachi Suisei - NEXT COLOR PLANET", url: "Articles/Suisei_Next_Colour_Planet.html",
        image: "images/Suisei-NEXT-COLOR-PLANET.jpg",
        date: "March 17, 2025",
        tags: ["Hoshimachi Suisei", "星街すいせい", "2020", "J-Pop", "single review", "music review"]
    },

    { title: "Roxette - Look Sharp!", url: "Roxette_Look_Sharp!.json", 
     image: "images/roxettelooksharp.jpg", 
     date: "March 17, 2025", 
     tags: ["roxette", "1988", "pop", "album review"] }
];

// Function to load articles dynamically for homepage
function loadArticles() {
    const container = document.getElementById("articles-grid");
    container.innerHTML = ""; // Clear content

    articles.forEach(article => {
        const articleCard = `
            <div class="article-card">
                <a href="article.html?file=${encodeURIComponent(article.file)}">
                    <img src="${article.image}" alt="${article.title}">
                    <h3>${article.title}</h3>
                    <p class="article-date">📅 ${article.date}</p>
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}
                    </div>
                </a>
            </div>
        `;
        container.innerHTML += articleCard;
    });
}

document.addEventListener("DOMContentLoaded", loadArticles);

// Run on page load
document.addEventListener("DOMContentLoaded", loadArticles);

// Function to search articles based on the search input
function searchArticles() {
    loadArticles(); // Re-run the loadArticles function whenever search input changes
}
