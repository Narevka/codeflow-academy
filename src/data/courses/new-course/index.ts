import { Course } from "@/types/course";

export const newCourse: Course = {
  id: "react-fundamentals",
  title: "Podstawy React.js",
  description: "Kompletny kurs wprowadzający do tworzenia nowoczesnych interfejsów użytkownika przy pomocy biblioteki React.js.",
  progress: 0,
  modules: [
    {
      id: "mod-react-basics",
      title: "Wprowadzenie do React",
      completed: false,
      lessons: [
        {
          id: "react-introduction",
          title: "Czym jest React?",
          displayTitle: "Wprowadzenie do React.js",
          videoUrl: "https://example.com/videos/react-intro.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Wprowadzenie do React.js

React to biblioteka JavaScript stworzona przez Facebooka, która służy do budowania interfejsów użytkownika, szczególnie aplikacji jednostronicowych (SPA - Single Page Applications). React został zaprojektowany, aby rozwiązać problem tworzenia złożonych UI z danymi, które zmieniają się w czasie.

## Dlaczego React?

- **Deklaratywny** - React sprawia, że tworzenie interaktywnych UI jest przewidywalne i łatwe do debugowania
- **Oparty na komponentach** - buduj niezależne, wielokrotnego użytku komponenty zarządzające swoim stanem
- **Możliwość użycia w różnych środowiskach** - renderuj na serwerze, w aplikacjach mobilnych (React Native) i na urządzeniach stacjonarnych
- **Efektywny** - wykorzystuje Virtual DOM do minimalizacji operacji na rzeczywistym DOM

## Historia Reacta

React został stworzony przez Jordana Walke, inżyniera Facebooka, i został po raz pierwszy użyty w News Feedzie Facebooka w 2011 roku, a następnie w Instagramie w 2012 roku. Został udostępniony jako open source w maju 2013 roku.

## Ekosystem React

Oprócz samej biblioteki, ekosystem React składa się z wielu narzędzi i bibliotek:

- **React DOM** - pakiet do renderowania komponentów React w przeglądarce
- **React Router** - rozwiązanie do nawigacji w aplikacjach React
- **Redux/Context API** - narzędzia do zarządzania globalnym stanem
- **Next.js/Gatsby** - frameworki oparte na React
- **React Native** - platforma do tworzenia natywnych aplikacji mobilnych

## "Hello World" w React

Oto prosty przykład komponentu React:

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
\`\`\`

W następnych lekcjach poznamy bardziej zaawansowane możliwości React, takie jak stan, hooki, obsługa zdarzeń i wiele więcej.
          `
        },
        {
          id: "jsx-components",
          title: "JSX i komponenty",
          displayTitle: "JSX i komponenty w React",
          videoUrl: "https://example.com/videos/jsx-components.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# JSX i komponenty w React

JSX (JavaScript XML) to rozszerzenie składni JavaScript, które pozwala nam pisać wyrażenia podobne do HTML bezpośrednio w kodzie JavaScript. Komponenty to podstawowe elementy budowy interfejsów w React.

## JSX - podstawy

JSX wygląda jak HTML, ale ma moc JavaScript:

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

JSX można zagnieżdżać i używać wyrażeń JavaScript wewnątrz nawiasów klamrowych:

\`\`\`jsx
const name = 'John';
const element = <h1>Hello, {name}!</h1>;
\`\`\`

### Różnice między JSX a HTML:

1. **className zamiast class**:
   \`\`\`jsx
   <div className="container">...</div>
   \`\`\`

2. **camelCase dla atrybutów**:
   \`\`\`jsx
   <button onClick={handleClick}>Kliknij mnie</button>
   \`\`\`

3. **Samozamykające się tagi**:
   \`\`\`jsx
   <img src="image.jpg" alt="Obraz" />
   \`\`\`

## Komponenty w React

Komponenty pozwalają podzielić UI na niezależne, wielokrotnego użytku części. Istnieją dwa główne typy komponentów:

### Komponenty funkcyjne

\`\`\`jsx
function Welcome(props) {
  return <h1>Witaj, {props.name}</h1>;
}
\`\`\`

### Komponenty klasowe

\`\`\`jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Witaj, {this.props.name}</h1>;
  }
}
\`\`\`

W dzisiejszych czasach komponenty funkcyjne są preferowane ze względu na hooki React.

## Kompozycja komponentów

Komponenty mogą odwoływać się do innych komponentów w swoich wyjściach:

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
\`\`\`

## Props - właściwości komponentów

Props to dane przekazywane do komponentu od rodzica:

\`\`\`jsx
function Welcome(props) {
  return <h1>Witaj, {props.name}</h1>;
}

function App() {
  return <Welcome name="John" />;
}
\`\`\`

Props są tylko do odczytu. Komponenty nie powinny modyfikować swoich props.

## Quest: Budowanie galerii zdjęć

Stwórz prostą galerię zdjęć w React, składającą się z następujących komponentów:
1. \`Gallery\` - główny kontener
2. \`ImageCard\` - pojedyncza karta ze zdjęciem, tytułem i opisem
3. \`ImageDescription\` - komponent wyświetlający opis zdjęcia

Galeria powinna wyświetlać 3-4 różne zdjęcia (możesz użyć placeholders jak https://placekitten.com/). Komponent \`ImageCard\` powinien przyjmować props: \`imageSrc\`, \`title\` i \`description\`.

Pamiętaj o właściwej strukturze komponentów i przekazywaniu props!
          `
        }
      ]
    },
    {
      id: "mod-react-state",
      title: "Stan i cykl życia",
      completed: false,
      lessons: [
        {
          id: "state-lifecycle",
          title: "Stan i cykl życia",
          displayTitle: "Stan i cykl życia komponentów",
          videoUrl: "https://example.com/videos/state-lifecycle.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Stan i cykl życia komponentów

Stan (state) to dane, które są zarządzane przez komponent i mogą się zmieniać w czasie, wpływając na jego renderowanie. Cykl życia to fazy, przez które przechodzi komponent od momentu jego utworzenia do usunięcia.

## Stan (State)

Stan pozwala komponentom React na dynamiczne reagowanie na zmiany danych. W przeciwieństwie do props, stan jest w pełni kontrolowany przez komponent.

### Stan w komponentach funkcyjnych (z hook useState)

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  // Deklaracja stanu z początkową wartością 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Kliknąłeś {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
\`\`\`

### Stan w komponentach klasowych

\`\`\`jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Inicjalizacja stanu
  }

  render() {
    return (
      <div>
        <p>Kliknąłeś {this.state.count} razy</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Kliknij mnie
        </button>
      </div>
    );
  }
}
\`\`\`

### Kilka ważnych zasad dotyczących stanu:

1. Nie modyfikuj stanu bezpośrednio: używaj \`setState\` lub funkcji setter z \`useState\`
2. Aktualizacje stanu mogą być asynchroniczne
3. Aktualizacje stanu są scalane w komponentach klasowych

## Cykl życia komponentów

### W komponentach klasowych

Komponenty klasowe mają następujące metody cyklu życia:

1. **Montowanie**:
   - \`constructor()\` - inicjalizacja
   - \`render()\` - renderowanie komponentu
   - \`componentDidMount()\` - po wyrenderowaniu komponentu

2. **Aktualizacja**:
   - \`shouldComponentUpdate()\` - decyduje czy potrzebna jest aktualizacja
   - \`render()\` - ponowne renderowanie
   - \`componentDidUpdate()\` - po aktualizacji komponentu

3. **Odmontowywanie**:
   - \`componentWillUnmount()\` - przed usunięciem komponentu

### W komponentach funkcyjnych (z hook useEffect)

Hook \`useEffect\` zastępuje metody cyklu życia:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Podobne do componentDidMount i componentDidUpdate
  useEffect(() => {
    document.title = \`Kliknąłeś \${count} razy\`;
    
    // Podobne do componentWillUnmount - funkcja czyszcząca
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Uruchamia efekt tylko gdy zmieni się count

  return (
    <div>
      <p>Kliknąłeś {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
\`\`\`

## Quest: Zegar z obsługą różnych stref czasowych

Stwórz aplikację zegara, która:
1. Pokazuje aktualny czas, odświeżany co sekundę
2. Pozwala wybrać różne strefy czasowe z listy
3. Wyświetla datę w wybranym formacie (12h/24h)
4. Posiada funkcję stopera z przyciskami start/stop/reset
5. Zapisuje ostatnio wybraną strefę czasową po ponownym uruchomieniu

Wykorzystaj useState do przechowywania wybranej strefy i formatu, oraz useEffect do aktualizacji czasu i obsługi timera.
          `
        },
        {
          id: "handling-events",
          title: "Obsługa zdarzeń",
          displayTitle: "Obsługa zdarzeń w React",
          videoUrl: "https://example.com/videos/handling-events.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Obsługa zdarzeń w React

Obsługa zdarzeń w React jest podobna do obsługi zdarzeń w DOM, ale z kilkoma różnicami syntaktycznymi.

## Podstawy obsługi zdarzeń

W React:
- Nazwy zdarzeń są zapisywane camelCase (np. \`onClick\` zamiast \`onclick\`)
- Przekazujemy funkcje jako handlery zdarzeń, a nie stringi
- Nie możemy zwrócić \`false\` aby zapobiec domyślnemu zachowaniu - musimy użyć \`preventDefault\`

### Przykład:

\`\`\`jsx
// HTML
<button onclick="activateLasers()">
  Aktywuj lasery
</button>

// React
<button onClick={activateLasers}>
  Aktywuj lasery
</button>
\`\`\`

## Zapobieganie domyślnemu zachowaniu

\`\`\`jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault(); // Zapobiega przeładowaniu strony
    console.log('Formularz został wysłany.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Wyślij</button>
    </form>
  );
}
\`\`\`

## Wiązanie metod w klasach

W komponentach klasowych musimy zadbać o poprawne wiązanie metod:

\`\`\`jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    
    // Wiązanie konieczne dla poprawnego działania 'this'
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
\`\`\`

## Najczęściej używane zdarzenia

- \`onClick\` - kliknięcie
- \`onChange\` - zmiana w polu formularza
- \`onSubmit\` - wysłanie formularza
- \`onMouseEnter\`, \`onMouseLeave\` - zdarzenia myszy
- \`onKeyDown\`, \`onKeyUp\` - zdarzenia klawiatury
- \`onFocus\`, \`onBlur\` - fokusowanie elementu

## Quest: Interaktywna galeria zdjęć

Stwórz interaktywną galerię zdjęć, która:
1. Wyświetla miniatury zdjęć w siatce
2. Po kliknięciu na miniaturę pokazuje powiększone zdjęcie w modalnym oknie
3. Pozwala nawigować między zdjęciami za pomocą przycisków lub klawiszy strzałek
4. Umożliwia dodawanie zdjęć do ulubionych
5. Filtruje zdjęcia według kategorii

Użyj różnych zdarzeń do obsługi interakcji użytkownika.
          `
        }
      ]
    },
    {
      id: "mod-react-advanced",
      title: "Komponenty zaawansowane",
      completed: false,
      lessons: [
        {
          id: "conditional-rendering",
          title: "Renderowanie warunkowe",
          displayTitle: "Renderowanie warunkowe w React",
          videoUrl: "https://example.com/videos/conditional-rendering.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Renderowanie warunkowe w React

Renderowanie warunkowe w React działa tak samo jak warunki w JavaScript. Pozwala tworzyć komponenty, które renderują różne elementy w zależności od stanu aplikacji.

## Podstawy renderowania warunkowego

### Używanie if-else

\`\`\`jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
\`\`\`

### Wyrażenia warunkowe w JSX

\`\`\`jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}
\`\`\`

## Ukrywanie komponentów

Czasami chcemy ukryć komponent. Możemy to zrobić zwracając \`null\`:

\`\`\`jsx
function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }

  return (
    <div className="warning">
      Uwaga!
    </div>
  );
}
\`\`\`

## Operatory logiczne z krótkim obwodem

\`\`\`jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Witaj!</h1>
      {unreadMessages.length > 0 && (
        <h2>
          Masz {unreadMessages.length} nieprzeczytanych wiadomości.
        </h2>
      )}
    </div>
  );
}
\`\`\`

## Quest: Aplikacja pogodowa z różnymi widokami

Stwórz aplikację pogodową, która:
1. Wyświetla różne ikony w zależności od warunków (słońce, deszcz, śnieg)
2. Pokazuje alert przy ekstremalnych temperaturach
3. Umożliwia przełączanie między stopniami Celsjusza i Fahrenheita
4. Wyświetla dodatkowe informacje na żądanie użytkownika
5. Dostosowuje interfejs do pory dnia (jasny w dzień, ciemny w nocy)

Wykorzystaj różne techniki renderowania warunkowego.
          `
        },
        {
          id: "lists-keys",
          title: "Listy i klucze",
          displayTitle: "Listy i klucze w React",
          videoUrl: "https://example.com/videos/lists-keys.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Listy i klucze w React

Efektywne renderowanie list elementów jest ważną umiejętnością w React. Klucze (keys) pomagają React identyfikować, które elementy listy zostały zmienione, dodane lub usunięte.

## Renderowanie wielu komponentów

Do renderowania list w React używamy metody \`map()\`:

\`\`\`jsx
function NumberList({ numbers }) {
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}
\`\`\`

## Klucze (Keys)

Klucze pomagają React identyfikować elementy listy. Gdy elementy są aktualizowane, React decyduje które z nich należy ponownie renderować.

### Wybór kluczy

1. **Najlepszy wybór**: unikalne ID danych
2. **Alternatywnie**: indeks jako klucz (używaj tylko gdy nie masz stabilnych ID)

### Reguły dotyczące kluczy

- Klucze muszą być unikalne wśród rodzeństwa, ale nie globalnie
- Klucze nie są przekazywane do komponentów jako props
- Do tworzenia kluczy najlepiej używać stabilnych, unikalnych identyfikatorów

## Quest: Interaktywna lista zadań

Stwórz aplikację do zarządzania zadaniami, która:
1. Wyświetla listę zadań z możliwością dodawania nowych
2. Umożliwia oznaczanie zadań jako wykonane oraz ich usuwanie
3. Filtruje zadania (wszystkie/aktywne/ukończone)
4. Pozwala na edycję istniejących zadań
5. Grupuje zadania według priorytetów lub kategorii

Pamiętaj o prawidłowym używaniu kluczy dla wszystkich dynamicznie generowanych elementów.
          `
        },
        {
          id: "forms-controlled",
          title: "Formularze i komponenty kontrolowane",
          displayTitle: "Formularze i komponenty kontrolowane",
          videoUrl: "https://example.com/videos/forms-controlled.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Formularze i komponenty kontrolowane w React

Formularze w React różnią się nieco od standardowych formularzy HTML, ponieważ elementy formularza naturalnie utrzymują swój własny stan. W React popularnym podejściem jest używanie "komponentów kontrolowanych".

## Komponenty kontrolowane

W komponentach kontrolowanych, stan formularza jest zarządzany przez React:

\`\`\`jsx
import { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('Wysłano imię: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
}
\`\`\`

## Różne typy elementów formularza

- Textarea (\`<textarea value={text} onChange={handleChange} />\`)
- Select (\`<select value={option} onChange={handleChange}>\`)
- Input typu checkbox (\`<input type="checkbox" checked={checked} onChange={handleChange} />\`)
- Input typu radio (\`<input type="radio" checked={selected === 'option1'} />\`)

## Quest: Formularz rejestracji

Stwórz formularz rejestracji z walidacją, który:
1. Zawiera pola: imię, nazwisko, email, hasło, potw. hasła
2. Przeprowadza walidację w czasie rzeczywistym (min. długość, format email)
3. Wyświetla komunikaty o błędach pod odpowiednimi polami
4. Blokuje przycisk "Zarejestruj" jeśli formularz zawiera błędy
5. Wyświetla podsumowanie po poprawnym wypełnieniu

Użyj komponentów kontrolowanych i zaimplementuj kompleksową walidację.
          `
        },
        {
          id: "hooks-intro",
          title: "Wprowadzenie do hooków",
          displayTitle: "Hooki - współczesne podejście do Reacta",
          videoUrl: "https://example.com/videos/hooks-intro.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Wprowadzenie do hooków w React

Hooki, wprowadzone w React 16.8, pozwalają używać stanu i innych funkcji React bez pisania klas. Sprawiają, że kod jest bardziej przejrzysty i łatwiejszy w ponownym użyciu.

## Podstawowe hooki

### useState

\`useState\` pozwala funkcyjnym komponentom przechowywać stan lokalny:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Kliknąłeś {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
\`\`\`

### useEffect

\`useEffect\` pozwala wykonywać efekty uboczne w komponentach funkcyjnych:

\`\`\`jsx
useEffect(() => {
  // Kod efektu (np. pobieranie danych, subskrypcje)
  
  // Opcjonalna funkcja czyszcząca
  return () => {
    // Czyszczenie (np. anulowanie subskrypcji)
  };
}, [/* tablica zależności */]);
\`\`\`

### useContext

\`useContext\` upraszcza korzystanie z Context API:

\`\`\`jsx
const value = useContext(MyContext);
\`\`\`

## Hooki dodatkowe

- **useReducer** - alternatywa dla useState przy złożonej logice stanu
- **useCallback** - memoizacja funkcji dla optymalizacji
- **useMemo** - memoizacja wartości dla optymalizacji
- **useRef** - dostęp do referencji DOM i przechowywanie wartości pomiędzy renderowaniami

## Quest: Hooki w praktyce

Zbuduj aplikację do śledzenia wydatków, która:
1. Przechowuje i wyświetla listę wydatków (useState)
2. Pobiera i aktualizuje dane w lokalnym storage (useEffect)
3. Zarządza złożoną logiką kategorii i filtrowania (useReducer)
4. Udostępnia dane dla całej aplikacji (useContext)
5. Zawiera własny hook \`useExpenseCalculator\` do operacji na wydatkach

Implementacja powinna demonstrować praktyczne zastosowanie różnych hooków.
          `
        }
      ]
    }
  ]
};
