import { Course } from "@/types/course";

export const webDevCourse: Course = {
  id: "webdev-fundamentals",
  title: "Podstawy Tworzenia Stron Internetowych",
  description: "Kompletny kurs o podstawach tworzenia nowoczesnych stron internetowych z HTML, CSS i JavaScript.",
  progress: 0,
  modules: [
    {
      id: "mod-html-basics",
      title: "Podstawy HTML",
      completed: false,
      lessons: [
        {
          id: "html-introduction",
          title: "Wprowadzenie do HTML",
          displayTitle: "HTML: Podstawowy budulec internetu",
          videoUrl: "https://example.com/videos/html-intro.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Wprowadzenie do HTML

HTML (HyperText Markup Language) jest podstawowym językiem używanym do tworzenia stron internetowych. Jest to język znaczników, który definiuje strukturę i zawartość strony.

## Czego się nauczysz:

- Czym jest HTML i dlaczego jest ważny
- Podstawowa struktura dokumentu HTML
- Najważniejsze znaczniki HTML
- Jak tworzyć linki, listy i inne elementy

## Struktura dokumentu HTML

Każdy dokument HTML powinien zawierać następujące elementy:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tytuł strony</title>
</head>
<body>
    <!-- Zawartość strony -->
</body>
</html>
\`\`\`

Pamiętaj, że HTML definiuje tylko strukturę strony - do stylizacji używamy CSS, a do interaktywności JavaScript.
          `
        },
        {
          id: "html-elements",
          title: "Elementy HTML i atrybuty",
          displayTitle: "Elementy i atrybuty HTML: Budowanie bloków strony",
          videoUrl: "https://example.com/videos/html-elements.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Elementy HTML i atrybuty

Elementy HTML są podstawowymi blokami budulcowymi każdej strony internetowej. Każdy element może posiadać atrybuty, które dostarczają dodatkowych informacji o elemencie.

## Najważniejsze elementy HTML:

### Nagłówki

\`\`\`html
<h1>Nagłówek poziomu 1</h1>
<h2>Nagłówek poziomu 2</h2>
<h3>Nagłówek poziomu 3</h3>
<!-- i tak dalej aż do h6 -->
\`\`\`

### Paragrafy i formatowanie tekstu

\`\`\`html
<p>To jest paragraf tekstu.</p>
<strong>Tekst pogrubiony</strong>
<em>Tekst pochylony</em>
<mark>Tekst zaznaczony</mark>
\`\`\`

### Listy

\`\`\`html
<!-- Lista nieuporządkowana -->
<ul>
    <li>Element listy</li>
    <li>Inny element</li>
</ul>

<!-- Lista uporządkowana -->
<ol>
    <li>Pierwszy element</li>
    <li>Drugi element</li>
</ol>
\`\`\`

## Quest: Twoja pierwsza strona HTML

Stwórz prostą stronę HTML zawierającą:
1. Tytuł strony
2. Nagłówek H1
3. Paragraf z opisem
4. Listę z twoimi umiejętnościami
5. Link do innej strony

Pamiętaj o prawidłowej strukturze i zamykaniu wszystkich tagów!
          `
        },
        {
          id: "html-semantic",
          title: "Semantyczny HTML",
          displayTitle: "Semantyczny HTML: Nadawanie znaczenia elementom",
          videoUrl: "https://example.com/videos/html-semantic.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Semantyczny HTML

Semantyczny HTML to praktyka używania znaczników HTML, które jasno opisują swoje znaczenie zarówno dla przeglądarki jak i dla programisty. Używanie semantycznego HTML jest kluczowe dla dostępności i SEO.

## Główne elementy semantyczne:

- \`<header>\` - nagłówek strony lub sekcji
- \`<nav>\` - nawigacja
- \`<main>\` - główna zawartość strony
- \`<article>\` - niezależna zawartość, która ma sens sama w sobie
- \`<section>\` - logiczna sekcja zawartości
- \`<aside>\` - zawartość poboczna
- \`<footer>\` - stopka strony lub sekcji

## Przykład struktury semantycznej:

\`\`\`html
<body>
  <header>
    <h1>Nazwa strony</h1>
    <nav>
      <ul>
        <li><a href="#">Start</a></li>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Sekcja główna</h2>
      <article>
        <h3>Artykuł 1</h3>
        <p>Treść artykułu...</p>
      </article>
    </section>
    
    <aside>
      <h3>Informacje dodatkowe</h3>
      <p>Treść poboczna...</p>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2025 Moja Strona</p>
  </footer>
</body>
\`\`\`

Semantyczny HTML pomaga:
- Przeglądarkom lepiej interpretować zawartość
- Czytelnikom ekranowym w odpowiednim odczytywaniu treści
- Wyszukiwarkom w lepszym indeksowaniu strony
- Programistom w łatwiejszym utrzymaniu kodu
          `
        },
        {
          id: "html-forms",
          title: "Formularze HTML",
          displayTitle: "Formularze HTML: Interakcja z użytkownikiem",
          videoUrl: "https://example.com/videos/html-forms.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Formularze HTML

Formularze są kluczowym elementem interakcji użytkownika z witryną. Pozwalają użytkownikom na wprowadzanie danych, które mogą być przesyłane do serwera.

## Podstawowa struktura formularza:

\`\`\`html
<form action="/submit-form" method="post">
  <!-- Elementy formularza -->
  <input type="submit" value="Wyślij">
</form>
\`\`\`

## Główne elementy formularzy:

### Pola tekstowe:
\`\`\`html
<input type="text" name="username" placeholder="Nazwa użytkownika">
<input type="password" name="password" placeholder="Hasło">
<input type="email" name="email" placeholder="Email">
\`\`\`

### Pola wyboru:
\`\`\`html
<input type="checkbox" name="newsletter" id="newsletter">
<label for="newsletter">Zapisz mnie do newslettera</label>

<input type="radio" name="plan" id="basic" value="basic">
<label for="basic">Plan podstawowy</label>
<input type="radio" name="plan" id="premium" value="premium">
<label for="premium">Plan premium</label>
\`\`\`

### Listy rozwijane:
\`\`\`html
<select name="country">
  <option value="">Wybierz kraj</option>
  <option value="pl">Polska</option>
  <option value="de">Niemcy</option>
  <option value="fr">Francja</option>
</select>
\`\`\`

### Obszary tekstowe:
\`\`\`html
<textarea name="message" rows="4" cols="50" placeholder="Twoja wiadomość..."></textarea>
\`\`\`

## Quest: Formularz kontaktowy

Stwórz formularz kontaktowy zawierający:
1. Pole na imię i nazwisko
2. Pole na adres email
3. Listę rozwijaną z tematem wiadomości
4. Obszar tekstowy na treść wiadomości
5. Checkbox zgody na przetwarzanie danych
6. Przycisk wysyłania

Pamiętaj o dodaniu odpowiednich etykiet i atrybutów!
          `
        }
      ]
    },
    {
      id: "mod-css-basics",
      title: "Podstawy CSS",
      completed: false,
      lessons: [
        {
          id: "css-introduction",
          title: "Wprowadzenie do CSS",
          displayTitle: "CSS: Nadawanie stylu stronom internetowym",
          videoUrl: "https://example.com/videos/css-intro.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Wprowadzenie do CSS

CSS (Cascading Style Sheets) to język służący do opisywania prezentacji dokumentów HTML. Za pomocą CSS możemy kontrolować wygląd i układ elementów na stronie.

## Sposoby dodawania CSS:

### 1. Inline CSS (w linii):
\`\`\`html
<p style="color: blue; font-size: 16px;">Ten tekst jest niebieski.</p>
\`\`\`

### 2. Wewnętrzny CSS (w sekcji \`<head>\`):
\`\`\`html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
\`\`\`

### 3. Zewnętrzny CSS (w osobnym pliku):
\`\`\`html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

## Podstawowa składnia CSS:

\`\`\`css
selektor {
  właściwość: wartość;
  właściwość2: wartość2;
}
\`\`\`

## Główne selektory CSS:

- Selektor elementu: \`p {}\`
- Selektor klasy: \`.klasa {}\`
- Selektor ID: \`#identyfikator {}\`
- Selektor atrybutu: \`[type="text"] {}\`
- Selektor pseudoklasy: \`a:hover {}\`

## Podstawowe właściwości CSS:

- \`color\` - kolor tekstu
- \`background-color\` - kolor tła
- \`font-size\` - rozmiar czcionki
- \`font-family\` - rodzina czcionek
- \`margin\` - marginesy zewnętrzne
- \`padding\` - odstępy wewnętrzne
- \`border\` - obramowanie
          `
        },
        {
          id: "css-box-model",
          title: "Model pudełkowy CSS",
          displayTitle: "Model pudełkowy CSS: Zrozumienie układu strony",
          videoUrl: "https://example.com/videos/css-box-model.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Model pudełkowy CSS

Model pudełkowy (box model) to podstawowa koncepcja w CSS, która opisuje, jak elementy HTML są renderowane jako prostokątne pudełka z zawartością, dopełnieniem, obramowaniem i marginesem.

## Składniki modelu pudełkowego:

1. **Content (zawartość)** - obszar, w którym wyświetlana jest treść
2. **Padding (dopełnienie)** - przestrzeń wokół zawartości, wewnątrz obramowania
3. **Border (obramowanie)** - linia otaczająca zawartość i dopełnienie
4. **Margin (margines)** - przestrzeń na zewnątrz obramowania, tworząca odstęp od innych elementów

## Przykład:

\`\`\`css
.box {
  /* Zawartość */
  width: 300px;
  height: 200px;
  
  /* Dopełnienie */
  padding: 20px;
  
  /* Obramowanie */
  border: 2px solid black;
  
  /* Margines */
  margin: 30px;
}
\`\`\`

## Ważne właściwości związane z modelem pudełkowym:

- \`width\` i \`height\` - określa wymiary obszaru zawartości
- \`padding\` - określa dopełnienie (można też używać padding-top, padding-right, itd.)
- \`border\` - określa obramowanie (grubość, styl, kolor)
- \`margin\` - określa margines zewnętrzny (można też używać margin-top, margin-right, itd.)
- \`box-sizing\` - określa, jak obliczana jest całkowita szerokość i wysokość elementu

## Box-sizing:

Domyślnie \`width\` i \`height\` określają tylko rozmiar obszaru zawartości. Aby zmienić to zachowanie, można użyć właściwości \`box-sizing\`:

\`\`\`css
/* Szerokość i wysokość odnoszą się tylko do zawartości */
box-sizing: content-box; /* Wartość domyślna */

/* Szerokość i wysokość obejmują zawartość, padding i border */
box-sizing: border-box;
\`\`\`

## Quest: Karta produktu

Stwórz kartę produktu z wykorzystaniem modelu pudełkowego, która zawiera:
1. Obraz produktu
2. Tytuł produktu
3. Krótki opis
4. Cenę
5. Przycisk "Dodaj do koszyka"

Zastosuj odpowiednie marginesy, dopełnienia i obramowania, aby karta wyglądała profesjonalnie.
          `
        },
        {
          id: "css-flexbox",
          title: "Flexbox",
          displayTitle: "Flexbox: Nowoczesne układanie elementów",
          videoUrl: "https://example.com/videos/css-flexbox.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Flexbox CSS

Flexbox to potężny system układu (layout) w CSS, który umożliwia elastyczne rozmieszczanie elementów w kontenerze, nawet gdy ich rozmiar jest nieznany lub dynamiczny.

## Podstawowe pojęcia:

- **Kontener flex** - element nadrzędny z \`display: flex\`
- **Elementy flex** - bezpośrednie dzieci kontenera flex
- **Oś główna** - oś biegnąca zgodnie z \`flex-direction\`
- **Oś poprzeczna** - oś prostopadła do osi głównej

## Właściwości kontenera flex:

\`\`\`css
.container {
  display: flex; /* lub display: inline-flex */
  
  /* Kierunek osi głównej */
  flex-direction: row | row-reverse | column | column-reverse;
  
  /* Zawijanie elementów */
  flex-wrap: nowrap | wrap | wrap-reverse;
  
  /* Skrót dla flex-direction i flex-wrap */
  flex-flow: row nowrap;
  
  /* Wyrównanie wzdłuż osi głównej */
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  
  /* Wyrównanie wzdłuż osi poprzecznej */
  align-items: stretch | flex-start | flex-end | center | baseline;
  
  /* Wyrównanie wierszy wzdłuż osi poprzecznej (gdy jest wiele linii) */
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
\`\`\`

## Właściwości elementów flex:

\`\`\`css
.item {
  /* Kolejność elementu */
  order: 0;
  
  /* Zdolność elementu do rozszerzania się */
  flex-grow: 0;
  
  /* Zdolność elementu do kurczenia się */
  flex-shrink: 1;
  
  /* Początkowy rozmiar elementu */
  flex-basis: auto;
  
  /* Skrót dla flex-grow, flex-shrink i flex-basis */
  flex: 0 1 auto;
  
  /* Nadpisanie align-items dla konkretnego elementu */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
\`\`\`

## Przykład układu z Flexbox:

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  flex: 0 0 calc(33.333% - 20px);
  margin: 10px;
}
\`\`\`

Ten przykład tworzy układ trzech kolumn z równymi odstępami między elementami.
          `
        },
        {
          id: "css-responsive",
          title: "Responsywny design z CSS",
          displayTitle: "Responsywny design: Strony na każde urządzenie",
          videoUrl: "https://example.com/videos/css-responsive.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Responsywny design z CSS

Responsywny design to podejście do tworzenia stron internetowych, które sprawia, że strony dobrze wyglądają na wszystkich urządzeniach - od małych telefonów po duże monitory.

## Kluczowe elementy responsywnego designu:

### 1. Viewport Meta Tag

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### 2. Elastyczne jednostki

Zamiast pikseli (px) warto używać:
- \`%\` - procent względem elementu nadrzędnego
- \`em\` - względem rozmiaru czcionki elementu
- \`rem\` - względem rozmiaru czcionki elementu root (html)
- \`vw/vh\` - procent szerokości/wysokości viewportu

### 3. Media Queries

\`\`\`css
/* Styl dla urządzeń o szerokości do 600px */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}

/* Styl dla urządzeń o szerokości od 601px do 900px */
@media (min-width: 601px) and (max-width: 900px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

/* Styl dla urządzeń o szerokości powyżej 900px */
@media (min-width: 901px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
\`\`\`

### 4. Elastyczne obrazy

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

### 5. Podejście Mobile-first

Najpierw projektujemy dla małych ekranów, a następnie dostosowujemy dla większych:

\`\`\`css
/* Style podstawowe (mobile) */
.container {
  flex-direction: column;
}

/* Style dla większych ekranów */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
\`\`\`

## Quest: Responsywna strona główna

Stwórz responsywną stronę główną, która:
1. Ma nawigację zmieniającą się w menu hamburger na małych ekranach
2. Wyświetla kafelki w jednej kolumnie na telefonach, dwóch na tabletach i trzech na desktopach
3. Zmienia rozmiar czcionki w zależności od szerokości ekranu
4. Poprawnie skaluje obrazy, aby zachować proporcje
5. Ukrywa niektóre elementy na małych ekranach

Używaj podejścia mobile-first!
          `
        }
      ]
    },
    {
      id: "mod-js-basics",
      title: "Podstawy JavaScript",
      completed: false,
      lessons: [
        {
          id: "js-introduction",
          title: "Wprowadzenie do JavaScript",
          displayTitle: "JavaScript: Dodawanie interaktywności",
          videoUrl: "https://example.com/videos/js-intro.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Wprowadzenie do JavaScript

JavaScript to dynamiczny język programowania, który umożliwia dodawanie interaktywności do stron internetowych. Jest to jeden z trzech podstawowych języków używanych do tworzenia stron internetowych, obok HTML i CSS.

## Jak dodać JavaScript do strony:

### 1. Wewnętrzny JavaScript:
\`\`\`html
<script>
  // Kod JavaScript
  console.log("Hello World!");
</script>
\`\`\`

### 2. Zewnętrzny plik JavaScript:
\`\`\`html
<script src="script.js"></script>
\`\`\`

## Podstawowe elementy JavaScript:

### Zmienne i typy danych:
\`\`\`javascript
// Deklaracja zmiennych
let name = "Jan";         // String
const age = 30;           // Number
var isActive = true;      // Boolean
let user = {              // Object
  name: "Jan",
  age: 30
};
let colors = ["red", "green", "blue"];  // Array
let nothing = null;       // Null
let notDefined;           // Undefined
\`\`\`

### Operatory:
\`\`\`javascript
// Arytmetyczne
let sum = 5 + 3;          // 8
let difference = 10 - 5;  // 5
let product = 4 * 2;      // 8
let quotient = 20 / 5;    // 4
let remainder = 10 % 3;   // 1

// Porównania
let equal = 5 === 5;      // true (równość wartości i typu)
let notEqual = 5 !== "5"; // true (różnica wartości lub typu)
let greater = 10 > 5;     // true
let less = 5 < 10;        // true

// Logiczne
let and = true && false;  // false
let or = true || false;   // true
let not = !true;          // false
\`\`\`

### Instrukcje warunkowe:
\`\`\`javascript
if (age >= 18) {
  console.log("Dorosły");
} else if (age >= 13) {
  console.log("Nastolatek");
} else {
  console.log("Dziecko");
}

// Operator warunkowy
let status = age >= 18 ? "Dorosły" : "Niepełnoletni";
\`\`\`

### Funkcje:
\`\`\`javascript
// Deklaracja funkcji
function greet(name) {
  return "Cześć, " + name + "!";
}

// Wywołanie funkcji
let greeting = greet("Anna");  // "Cześć, Anna!"

// Funkcje strzałkowe (ES6)
const multiply = (a, b) => a * b;
\`\`\`

## Podstawowe interakcje:

\`\`\`javascript
// Wyświetlanie komunikatów
alert("Uwaga!");

// Pobieranie danych od użytkownika
let name = prompt("Podaj swoje imię:");

// Potwierdzenie
let confirmed = confirm("Czy na pewno chcesz kontynuować?");
\`\`\`
          `
        },
        {
          id: "js-dom",
          title: "Document Object Model (DOM)",
          displayTitle: "DOM: Manipulacja elementami HTML",
          videoUrl: "https://example.com/videos/js-dom.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Document Object Model (DOM)

DOM to programowy interfejs dla dokumentów HTML i XML. Reprezentuje stronę internetową jako drzewo obiektów, które można modyfikować za pomocą JavaScript.

## Dostęp do elementów DOM:

\`\`\`javascript
// Pobieranie elementu po ID
const header = document.getElementById("header");

// Pobieranie elementów po nazwie klasy (zwraca kolekcję)
const paragraphs = document.getElementsByClassName("paragraph");

// Pobieranie elementów po nazwie tagu (zwraca kolekcję)
const buttons = document.getElementsByTagName("button");

// Pobieranie elementu za pomocą selektora CSS (zwraca pierwszy pasujący)
const firstButton = document.querySelector(".btn-primary");

// Pobieranie wszystkich elementów pasujących do selektora CSS (zwraca NodeList)
const allButtons = document.querySelectorAll(".btn");
\`\`\`

## Modyfikacja zawartości elementów:

\`\`\`javascript
// Zmiana tekstu wewnątrz elementu
header.textContent = "Nowy nagłówek";

// Zmiana HTML wewnątrz elementu
header.innerHTML = "<span>Nowy</span> nagłówek";

// Zmiana wartości atrybutu
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
link.href = "https://example.com"; // alternatywna metoda dla niektórych atrybutów
\`\`\`

## Modyfikacja stylów CSS:

\`\`\`javascript
// Bezpośrednia zmiana stylu
header.style.color = "blue";
header.style.fontSize = "24px";
header.style.backgroundColor = "yellow";

// Dodawanie i usuwanie klas
header.classList.add("highlighted");
header.classList.remove("hidden");
header.classList.toggle("active"); // dodaje jeśli nie ma, usuwa jeśli jest
header.classList.contains("active"); // sprawdza czy element ma daną klasę
\`\`\`

## Tworzenie i dodawanie nowych elementów:

\`\`\`javascript
// Tworzenie nowego elementu
const newParagraph = document.createElement("p");
newParagraph.textContent = "To jest nowy paragraf.";

// Dodawanie do dokumentu
document.body.appendChild(newParagraph); // jako ostatnie dziecko
document.body.prepend(newParagraph); // jako pierwsze dziecko

const container = document.querySelector(".container");
container.insertBefore(newParagraph, container.firstChild); // przed określonym elementem
\`\`\`

## Usuwanie elementów:

\`\`\`javascript
// Usuwanie elementu
const oldParagraph = document.querySelector(".old-paragraph");
oldParagraph.remove(); // nowoczesna metoda

// Alternatywnie (dla starszych przeglądarek)
oldParagraph.parentNode.removeChild(oldParagraph);
\`\`\`

## Quest: Dynamiczna lista zadań

Stwórz prostą aplikację "Lista zadań", która pozwala:
1. Dodawać nowe zadania po wpisaniu tekstu i naciśnięciu przycisku lub klawisza Enter
2. Oznaczać zadania jako wykonane (przekreślenie tekstu)
3. Usuwać zadania z listy
4. Zliczać i wyświetlać liczbę pozostałych zadań do wykonania

Wykorzystaj manipulacje DOM do dynamicznego tworzenia, modyfikowania i usuwania elementów listy.
          `
        },
        {
          id: "js-events",
          title: "Zdarzenia JavaScript",
          displayTitle: "Zdarzenia: Reagowanie na akcje użytkowników",
          videoUrl: "https://example.com/videos/js-events.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
  description: `
# Zdarzenia JavaScript

Zdarzenia (events) w JavaScript pozwalają reagować na różne akcje użytkownika, takie jak kliknięcie, najechanie myszką, wciśnięcie klawisza czy przesłanie formularza.

## Podstawowe metody obsługi zdarzeń:

### 1. Dodawanie obsługi zdarzenia przez właściwość:

\`\`\`javascript
const button = document.getElementById("myButton");
button.onclick = function() {
  alert("Przycisk został kliknięty!");
};
\`\`\`

Wadą tej metody jest to, że można przypisać tylko jedną funkcję obsługi do danego zdarzenia.

### 2. Metoda addEventListener (zalecana):

\`\`\`javascript
button.addEventListener("click", function() {
  alert("Przycisk został kliknięty!");
});

// Można dodać wiele funkcji obsługi do tego samego zdarzenia
button.addEventListener("click", function() {
  console.log("To też się wykona przy kliknięciu");
});
\`\`\`

### 3. Usuwanie obsługi zdarzenia:

\`\`\`javascript
function handleClick() {
  alert("Kliknięto!");
}

button.addEventListener("click", handleClick);
// Później, gdy chcemy usunąć:
button.removeEventListener("click", handleClick);
\`\`\`

## Obiekt zdarzenia:

Funkcje obsługi zdarzeń otrzymują obiekt zdarzenia jako pierwszy argument. Zawiera on informacje o zdarzeniu i umożliwia kontrolę jego przebiegu.

\`\`\`javascript
button.addEventListener("click", function(event) {
  // event zawiera informacje o zdarzeniu
  console.log(event.type);      // "click"
  console.log(event.target);    // element, który wywołał zdarzenie
  console.log(event.clientX);   // pozycja X myszy podczas kliknięcia
  console.log(event.clientY);   // pozycja Y myszy podczas kliknięcia
  
  // Zatrzymanie domyślnej akcji
  event.preventDefault();
  
  // Zatrzymanie propagacji zdarzenia
  event.stopPropagation();
});
\`\`\`

## Najważniejsze rodzaje zdarzeń:

### Zdarzenia myszy:
- \`click\` - kliknięcie myszą
- \`dblclick\` - podwójne kliknięcie
- \`mousedown\` / \`mouseup\` - wciśnięcie / zwolnienie przycisku myszy
- \`mouseover\` / \`mouseout\` - najechanie kursorem na element / opuszczenie elementu
- \`mousemove\` - ruch kursora

### Zdarzenia klawiatury:
- \`keydown\` / \`keyup\` - wciśnięcie / zwolnienie klawisza
- \`keypress\` - wciśnięcie klawisza (tylko znaki)

### Zdarzenia formularzy:
- \`submit\` - przesłanie formularza
- \`change\` - zmiana wartości pola formularza
- \`focus\` / \`blur\` - uzyskanie / utracenie fokusu przez element
- \`input\` - każda zmiana wartości pola tekstowego

### Zdarzenia dokumentu:
- \`DOMContentLoaded\` - załadowanie HTML i zbudowanie DOM
- \`load\` - załadowanie wszystkich zasobów (w tym obrazów, stylów)

## Quest: Interaktywna galeria zdjęć

Stwórz interaktywną galerię zdjęć, która:
1. Wyświetla miniatury kilku zdjęć
2. Po kliknięciu w miniaturę pokazuje powiększone zdjęcie w modalnym oknie
3. Umożliwia zamknięcie modalu po kliknięciu na przycisk zamykania lub tło
4. Implementuje navigację "poprzednie/następne" za pomocą strzałek lub przycisków
5. Reaguje na zdarzenia klawiaturowe (ESC do zamykania, strzałki do nawigacji)

Wykorzystaj poznane zdarzenia JavaScript do obsługi interakcji z użytkownikiem.
          `
        },
        {
          id: "js-projects",
          title: "Mini-projekty JavaScript",
          displayTitle: "Mini-projekty: Praktyczne wykorzystanie JavaScript",
          videoUrl: "https://example.com/videos/js-projects.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Mini-projekty JavaScript

W tej lekcji stworzymy kilka praktycznych mini-projektów wykorzystujących dotychczas zdobytą wiedzę z HTML, CSS i JavaScript.

## 1. Kalkulator

Prosty kalkulator wykonujący podstawowe operacje matematyczne:

\`\`\`javascript
// Funkcje kalkulatora
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Błąd: Dzielenie przez zero";
  return a / b;
}

// Obsługa interfejsu
document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll(".calculator button");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Logika obsługi kalkulatora
    });
  });
});
\`\`\`

## 2. Gra "Zgadnij liczbę"

Prosta gra, w której komputer losuje liczbę, a gracz próbuje ją odgadnąć:

\`\`\`javascript
function startGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  
  document.getElementById("guessForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++;
    
      if (userGuess === randomNumber) {
      showMessage(\`Gratulacje! Odgadłeś liczbę \${randomNumber} w \${attempts} próbach!\`);
      resetGame();
    } else if (userGuess < randomNumber) {
      showMessage("Za mało! Spróbuj większej liczby.");
    } else {
      showMessage("Za dużo! Spróbuj mniejszej liczby.");
    }
  });
}

function resetGame() {
  document.getElementById("userGuess").value = "";
  document.getElementById("guessForm").disabled = true;
  document.getElementById("newGame").style.display = "block";
}
        `
        }
      ]
    },
    {
      id: "mod-advanced-web",
      title: "Zaawansowane techniki web",
      completed: false,
      lessons: [
        {
          id: "web-apis",
          title: "Web API i Fetch",
          displayTitle: "Web API: Komunikacja z serwerami",
          videoUrl: "https://example.com/videos/web-apis.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Web API i Fetch

Web API (Application Programming Interface) to interfejsy, które umożliwiają komunikację między różnymi aplikacjami i serwisami internetowymi. Dzięki nim możemy np. pobierać dane z serwerów czy integrować zewnętrzne usługi.

## Fetch API

Fetch API to nowoczesny interfejs do wykonywania żądań HTTP w JavaScript. Jest on wbudowany w przeglądarki i wykorzystuje obietnice (Promises).

### Podstawowe użycie Fetch:

\`\`\`javascript
// Podstawowe żądanie GET
fetch('https://api.example.com/data')
  .then(response => {
    // Sprawdzenie czy żądanie zakończyło się sukcesem
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parsowanie odpowiedzi jako JSON
  })
  .then(data => {
    console.log('Success:', data);
    // Przetwarzanie otrzymanych danych
  })
  .catch(error => {
    console.error('Error:', error);
    // Obsługa błędów
  });
\`\`\`

### Konfiguracja żądania:

\`\`\`javascript
// Żądanie POST z dodatkowymi opcjami
fetch('https://api.example.com/users', {
  method: 'POST', // Metoda HTTP
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    name: 'Jan Kowalski',
    email: 'jan@example.com'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
\`\`\`

## Async/Await z Fetch

Składnia async/await pozwala na bardziej czytelny kod przy pracy z obietnicami:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Data:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Wywołanie funkcji
fetchData();
\`\`\`

## Popularne API

1. **Weather API** - informacje o pogodzie
2. **Google Maps API** - mapy i geolokalizacja
3. **YouTube API** - integracja z YouTube
4. **Twitter API** - interakcja z Twitterem
5. **Stripe API** - obsługa płatności

## Quest: Aplikacja Pogodowa

Stwórz aplikację pobierającą dane pogodowe dla wybranego miasta:

1. Zinteguruj się z darmowym API pogodowym (np. OpenWeatherMap)
2. Stwórz formularz wyszukiwania miasta
3. Wyświetl aktualne dane pogodowe: temperaturę, wilgotność, prędkość wiatru, opis pogody
4. Dodaj ikonę odpowiadającą aktualnej pogodzie
5. Zapewnij obsługę błędów (np. miasto nie znalezione)

Użyj async/await do obsługi żądań i zapewnij ładny interfejs użytkownika.
          `
        },
        {
          id: "web-storage",
          title: "Web Storage i ciasteczka",
          displayTitle: "Przechowywanie danych w przeglądarce",
          videoUrl: "https://example.com/videos/web-storage.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Web Storage i ciasteczka

Web Storage oraz ciasteczka (cookies) to mechanizmy umożliwiające przechowywanie danych w przeglądarce użytkownika. Są one niezbędne do tworzenia interaktywnych aplikacji, które zapamiętują stan między sesjami.

## LocalStorage i SessionStorage

LocalStorage i SessionStorage to dwa mechanizmy Web Storage API, które umożliwiają przechowywanie par klucz-wartość w przeglądarce.

### LocalStorage
- Dane są przechowywane bez terminu ważności
- Dane pozostają po zamknięciu przeglądarki
- Dane są dostępne dla wszystkich kart i okien otwartych z danej domeny

\`\`\`javascript
// Zapisywanie danych
localStorage.setItem('username', 'Jan');

// Odczytywanie danych
const username = localStorage.getItem('username');
console.log(username); // "Jan"

// Usuwanie konkretnej danej
localStorage.removeItem('username');

// Usuwanie wszystkich danych
localStorage.clear();
\`\`\`

### SessionStorage
- Dane są przechowywane tylko na czas trwania sesji strony (do zamknięcia karty/okna)
- Używa tych samych metod co localStorage

\`\`\`javascript
// Zapisywanie danych
sessionStorage.setItem('tempData', '12345');

// Odczytywanie danych
const tempData = sessionStorage.getItem('tempData');
\`\`\`

## Ciasteczka (Cookies)

Ciasteczka to małe pliki tekstowe przechowywane w przeglądarce użytkownika:
- Mogą mieć określony czas ważności
- Są wysyłane do serwera z każdym żądaniem HTTP
- Mają limit rozmiaru (zwykle 4KB)
- Można określić dodatkowe opcje bezpieczeństwa

\`\`\`javascript
// Ustawianie ciasteczka z datą ważności
document.cookie = "username=Jan; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Ustawianie ciasteczka z opcjami bezpieczeństwa
document.cookie = "auth=token123; Secure; HttpOnly; SameSite=Strict";

// Odczytywanie ciasteczek
console.log(document.cookie); // zwraca string ze wszystkimi ciasteczkami

// Funkcja do pobierania konkretnego ciasteczka
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(c => c.startsWith(name + '='));
  return cookie ? cookie.split('=')[1] : null;
}

// Usuwanie ciasteczka (przez ustawienie wygasłej daty)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
\`\`\`

## Porównanie mechanizmów przechowywania danych

| Cecha | LocalStorage | SessionStorage | Cookies |
|-------|--------------|----------------|---------|
| Okres ważności | Bez limitu | Sesja | Konfigurowalny |
| Limit rozmiaru | ~5-10MB | ~5-10MB | ~4KB |
| Wysyłanie do serwera | Nie | Nie | Tak |
| Dostępność | Wszystkie karty | Tylko w karcie | Wszystkie karty |
| API | Proste | Proste | Skomplikowane |

## Quest: Aplikacja z zapisywaniem preferencji

Stwórz aplikację, która:

1. Pozwala użytkownikowi dostosować interfejs (np. motyw jasny/ciemny, rozmiar czcionki, układ)
2. Zapisuje preferencje użytkownika w localStorage
3. Automatycznie wczytuje zapisane preferencje przy ponownej wizycie
4. Umożliwia zresetowanie wszystkich ustawień do domyślnych
5. Wyświetla datę ostatniej wizyty użytkownika (używając ciasteczek)

Aplikacja powinna mieć przyjazny interfejs z wyraźnymi kontrolkami do zmiany ustawień.
          `
        }
      ]
    }
  ]
}
