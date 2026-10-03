/* =========================
   DATA ARTIKEL
========================= */

const articles = [

  {
    id: "stereotip",

    title: "Apa Itu Stereotip?",

    category: "STEREOTIP",

    description:
      "Memahami pengertian stereotip, contoh dalam kehidupan sehari-hari, dan pengaruhnya terhadap masyarakat.",

    content:
`Stereotip adalah pandangan atau anggapan umum yang diberikan kepada seseorang atau kelompok berdasarkan karakteristik tertentu.

Stereotip dapat muncul karena pengalaman pribadi, lingkungan sosial, budaya, media, maupun informasi yang berulang kali diterima seseorang.

Contohnya adalah anggapan bahwa kelompok tertentu memiliki sifat tertentu hanya berdasarkan identitas kelompok tersebut.

Masalahnya, stereotip tidak selalu sesuai dengan kenyataan. Setiap individu memiliki karakter, pengalaman, dan kemampuan yang berbeda.

Karena itu, penting untuk memahami seseorang sebagai individu dan tidak langsung menilai seseorang hanya berdasarkan anggapan terhadap kelompoknya.`
  },


  {
    id: "interaksi",

    title: "Mengenal Interaksi Sosial",

    category: "SOSIOLOGI",

    description:
      "Memahami bagaimana manusia berhubungan dan berinteraksi dengan orang lain.",

    content:
`Interaksi sosial adalah hubungan timbal balik antara individu dengan individu, individu dengan kelompok, atau kelompok dengan kelompok.

Interaksi sosial terjadi dalam kehidupan sehari-hari.

Contohnya adalah percakapan antara dua teman, kegiatan belajar bersama, kerja kelompok, dan hubungan antara masyarakat dengan lingkungan sekitarnya.

Interaksi sosial dapat berlangsung secara langsung maupun melalui media komunikasi.

Dalam sosiologi, interaksi sosial merupakan salah satu bagian penting untuk memahami kehidupan masyarakat.`
  }

];


/* =========================
   ELEMENT
========================= */

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const homePage = document.getElementById("homePage");
const explorePage = document.getElementById("explorePage");
const articlePage = document.getElementById("articlePage");

const searchResults = document.getElementById("searchResults");

const articleTitle = document.getElementById("articleTitle");
const articleTag = document.getElementById("articleTag");
const articleText = document.getElementById("articleText");


/* =========================
   SIDEBAR
========================= */

document
  .getElementById("openSidebar")
  .addEventListener("click", openSidebar);


document
  .getElementById("closeSidebar")
  .addEventListener("click", closeSidebar);


overlay.addEventListener("click", closeSidebar);


function openSidebar() {

  sidebar.classList.add("active");

  overlay.classList.add("active");

}


function closeSidebar() {

  sidebar.classList.remove("active");

  overlay.classList.remove("active");

}


/* =========================
   HOME
========================= */

function showHome() {

  homePage.classList.remove("hidden");

  explorePage.classList.add("hidden");

  articlePage.classList.add("hidden");

  closeSidebar();

  window.scrollTo(0, 0);

}


/* =========================
   EXPLORE
========================= */

function showExplore() {

  homePage.classList.add("hidden");

  explorePage.classList.remove("hidden");

  articlePage.classList.add("hidden");

  closeSidebar();

  displayArticles(articles);

  window.scrollTo(0, 0);

}


/* =========================
   OPEN ARTICLE
========================= */

function openArticle(id) {

  const article = articles.find(
    item => item.id === id
  );

  if (!article) return;


  articleTitle.textContent = article.title;

  articleTag.textContent = article.category;

  articleText.textContent = article.content;


  homePage.classList.add("hidden");

  explorePage.classList.add("hidden");

  articlePage.classList.remove("hidden");

  window.scrollTo(0, 0);

}


/* =========================
   DISPLAY ARTICLES
========================= */

function displayArticles(list) {

  searchResults.innerHTML = "";


  if (list.length === 0) {

    searchResults.innerHTML = `
      <p>Tidak ada artikel yang ditemukan.</p>
    `;

    return;
  }


  list.forEach(article => {

    const card = document.createElement("article");

    card.className = "card";


    card.innerHTML = `

      <div class="cover">
        📚
      </div>

      <div class="card-content">

        <span class="tag">
          ${article.category}
        </span>

        <h3>
          ${article.title}
        </h3>

        <p>
          ${article.description}
        </p>

        <button
          class="read-button"
          onclick="openArticle('${article.id}')">

          Baca Artikel

        </button>

      </div>

    `;


    searchResults.appendChild(card);

  });

}


/* =========================
   SEARCH
========================= */

function searchArticles() {

  const keyword =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();


  const filtered = articles.filter(article =>

    article.title
      .toLowerCase()
      .includes(keyword)

    ||

    article.category
      .toLowerCase()
      .includes(keyword)

    ||

    article.description
      .toLowerCase()
      .includes(keyword)

  );


  displayArticles(filtered);

}


/* =========================
   DARK MODE
========================= */

function toggleDarkMode() {

  document.body.classList.toggle("dark");

  closeSidebar();


  if (document.body.classList.contains("dark")) {

    localStorage.setItem(
      "darkMode",
      "enabled"
    );

  } else {

    localStorage.setItem(
      "darkMode",
      "disabled"
    );

  }

}


/* =========================
   SIMPAN DARK MODE
========================= */

if (
  localStorage.getItem("darkMode")
  ===
  "enabled"
) {

  document.body.classList.add("dark");

}
