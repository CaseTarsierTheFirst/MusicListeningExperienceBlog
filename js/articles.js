const articles = [
    {
        title: "Madonna - Like A Prayer (Deadpool & Wolverine)",
        file: "Madonna_Like_A_Prayer_Single",
        image: "images/D-W-LikeAPrayer.jpg",
        date: "March 22, 2025",
        tags: ["Madonna", "Deadpool & Wolverine", "2024", "single review", "music review", "pop music"]
    },
    { 
        title: "Hoshimachi Suisei - NEXT COLOR PLANET",
        file: "Suisei_Next_Colour_Planet.html",
        image: "images/Suisei-NEXT-COLOR-PLANET.jpg",
        date: "March 17, 2025",
        tags: ["Hoshimachi Suisei", "J-Pop", "2020", "single review", "music review"]
    },
    { 
        title: "Roxette - Look Sharp! (1988)",
        file: "Roxette_Look_Sharp!.html",
        image: "images/roxettelooksharp.jpg",
        date: "March 17, 2025",
        tags: ["Roxette", "Look Sharp!", "pop rock", "1988", "music review"]
    }
];

// ✅ Function to render filtered articles
function loadArticles(filteredArticles = articles) {
    const container = document.getElementById("articles-grid");
    container.innerHTML = ""; // Clear content

    filteredArticles.forEach(article => {
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

// ✅ Real search function
function searchArticles() {
    const query = document.getElementById("search-input").value.toLowerCase();

    const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
    );

    loadArticles(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    loadArticles();

    // Attach search listener
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", searchArticles);
    }
});
