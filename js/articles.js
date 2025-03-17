// List of articles (add new ones here)
const articles = [
    { title: "Roxette - Look Sharp!", url: "Articles/Roxette_Look_Sharp!.html", image: "images/roxettelooksharp.jpg", date: "March 17, 2025" },
    { title: "Nirvana - Nevermind", url: "articles/nirvana_nevermind.html", image: "images/nirvana_nevermind.jpg", date: "March 15, 2025" },
    { title: "Pink Floyd - The Dark Side of the Moon", url: "articles/pink_floyd_dark_side.html", image: "images/pink_floyd_dark_side.jpg", date: "March 10, 2025" }
];

// Function to generate article cards
function loadArticles() {
    const container = document.getElementById("articles-grid");
    container.innerHTML = ""; // Clear existing content

    articles.forEach(article => {
        const articleCard = `
            <div class="article-card">
                <a href="${article.url}">
                    <img src="${article.image}" alt="${article.title}">
                    <h3>${article.title}</h3>
                    <p class="article-date">📅 ${article.date}</p>
                </a>
            </div>
        `;
        container.innerHTML += articleCard;
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", loadArticles);
