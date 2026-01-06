const testamentSelect = document.getElementById("testament");
const bookSelect = document.getElementById("book");
const chapterSelect = document.getElementById("chapter");
const versesBox = document.getElementById("verses");

// Charger testaments
for (let testament in bibleStructure) {
  let opt = document.createElement("option");
  opt.value = testament;
  opt.textContent = testament;
  testamentSelect.appendChild(opt);
}

// Testament → Livres
testamentSelect.addEventListener("change", () => {
  bookSelect.innerHTML = '<option value="">📘 Choisir le Livre</option>';
  chapterSelect.innerHTML = '<option value="">📖 Choisir le Chapitre</option>';
  versesBox.innerHTML = "";

  let books = bibleStructure[testamentSelect.value];
  for (let book in books) {
    let opt = document.createElement("option");
    opt.value = book;
    opt.textContent = book;
    bookSelect.appendChild(opt);
  }
});

// Livre → Chapitres
bookSelect.addEventListener("change", () => {
  chapterSelect.innerHTML = '<option value="">📖 Choisir le Chapitre</option>';
  versesBox.innerHTML = "";

  let total = bibleStructure[testamentSelect.value][bookSelect.value];
  for (let i = 1; i <= total; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = "Chapitre " + i;
    chapterSelect.appendChild(opt);
  }
});

// Chapitre → Versets (placeholder)
chapterSelect.addEventListener("change", () => {
  versesBox.innerHTML = `
    <p><strong>${bookSelect.value} ${chapterSelect.value}</strong></p>
    <p>👉 Les versets s’afficheront ici</p>
  `;
});
