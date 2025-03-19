// List of articles (add new ones here)
const articles = [
    {
        title: "Hoshimachi Suisei - NEXT COLOR PLANET",
        url: "Articles/Suisei_Next_Colour_Planet.html",
        image: "images/Suisei-NEXT-COLOR-PLANET.jpg",
        date: "March 17, 2025",
        tags: ["J-Pop", "2020", "music review"]
    },

    {
        title: "Roxette - Look Sharp!",
        url: "Articles/Roxette_Look_Sharp!.html",
        image: "images/roxettelooksharp.jpg",
        date: "March 17, 2025",
        tags: ["pop rock", "1988", "album review"]
    }

];

// Function to generate article cards
function loadArticles() {
    const container = document.getElementById("articles-grid");
    container.innerHTML = ""; // Clear existing content

    articles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        // ✅ Create tag elements
        const tagsHTML = article.tags
            .map(tag => `<span>${tag}</span>`)
            .join(" ");

        articleCard.innerHTML = `
            <a href="${article.url}">
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p class="article-date">📅 ${article.date}</p>
                <div class="article-tags">${tagsHTML}</div>
            </a>
        `;

        container.appendChild(articleCard);
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", loadArticles);
