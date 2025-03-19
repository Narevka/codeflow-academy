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
        },
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

## Przykład - zegar odświeżany co sekundę

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    // Funkcja czyszcząca
    return () => {
      clearInterval(timerID);
    };
  }, []); // Pusta tablica zależności - efekt działa tylko przy montowaniu i odmontowywaniu
  
  return (
    <div>
      <h2>Aktualny czas:</h2>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  );
}
\`\`\`
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

### Alternatywne sposoby:

1. **Funkcje strzałkowe w właściwościach klasy** (syntax eksperymentalny):
   \`\`\`jsx
   class Toggle extends React.Component {
     state = {isToggleOn: true};
     
     handleClick = () => {
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

2. **Funkcje strzałkowe w JSX**:
   \`\`\`jsx
   class Toggle extends React.Component {
     state = {isToggleOn: true};
     
     render() {
       return (
         <button onClick={() => {
           this.setState(prevState => ({
             isToggleOn: !prevState.isToggleOn
           }));
         }}>
           {this.state.isToggleOn ? 'ON' : 'OFF'}
         </button>
       );
     }
   }
   \`\`\`

## Przekazywanie argumentów do handlera

\`\`\`jsx
// Używając funkcji strzałkowej
<button onClick={(e) => this.deleteItem(id, e)}>Usuń</button>

// Używając bind
<button onClick={this.deleteItem.bind(this, id)}>Usuń</button>
\`\`\`

## Najczęściej używane zdarzenia

- \`onClick\` - kliknięcie
- \`onChange\` - zmiana w polu formularza
- \`onSubmit\` - wysłanie formularza
- \`onMouseEnter\`, \`onMouseLeave\` - zdarzenia myszy
- \`onKeyDown\`, \`onKeyUp\` - zdarzenia klawiatury
- \`onFocus\`, \`onBlur\` - fokusowanie elementu

## Quest: Prosta aplikacja Todo

Stwórz prostą aplikację Todo w React, która umożliwia:
1. Dodawanie nowych zadań poprzez formularz
2. Zaznaczanie zadań jako ukończone
3. Usuwanie zadań z listy

Aplikacja powinna posiadać komponenty:
- \`TodoApp\` - główny komponent aplikacji
- \`TodoForm\` - formularz do dodawania zadań
- \`TodoList\` - lista wszystkich zadań
- \`TodoItem\` - pojedyncze zadanie

Użyj zdarzeń \`onSubmit\`, \`onChange\` i \`onClick\` do obsługi interakcji. Wykorzystaj stan (useState) do przechowywania listy zadań.
          `
        },
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

Operatory logiczne JavaScript pozwalają na zwięzłe warunkowe renderowanie:

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

## Zaawansowane techniki

### Zmienne pomocnicze

\`\`\`jsx
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}
\`\`\`

### Renderowanie map z warunkowym filtrowaniem

\`\`\`jsx
function TaskList({ tasks, showCompleted }) {
  return (
    <ul>
      {tasks
        .filter(task => showCompleted || !task.completed)
        .map(task => (
          <li key={task.id}>
            {task.text}
          </li>
        ))
      }
    </ul>
  );
}
\`\`\`

### Używanie bibliotek warunkowego renderowania

Biblioteki takie jak \`lodash\` mogą pomóc w złożonym renderowaniu warunkowym.

## Quest: Aplikacja pogodowa z różnymi warunkami

Stwórz aplikację, która wyświetla różne komponenty w zależności od warunków pogodowych:

1. Komponent \`WeatherApp\` powinien przyjmować aktualną temperaturę i stan pogody (np. "słonecznie", "deszczowo", "śnieżnie")
2. W zależności od stanu, powinien renderować różne komponenty:
   - \`SunnyDisplay\` gdy jest słonecznie
   - \`RainyDisplay\` gdy jest deszczowo
   - \`SnowyDisplay\` gdy jest śnieżnie
3. Gdy temperatura jest powyżej 30°C, powinien dodatkowo wyświetlać alert o upale
4. Gdy temperatura jest poniżej 0°C, powinien wyświetlać alert o mrozie
5. Dodaj przełącznik między stopniami Celsjusza a Fahrenheita

Użyj wszystkich poznanych technik: if-else, wyrażenia warunkowe, operatory logiczne i zmienne pomocnicze.
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

const numbers = [1, 2, 3, 4, 5];
<NumberList numbers={numbers} />
\`\`\`

Możemy również umieścić wyrażenie \`map()\` bezpośrednio w JSX:

\`\`\`jsx
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      )}
    </ul>
  );
}
\`\`\`

## Klucze (Keys)

Klucze pomagają React identyfikować elementy listy. Gdy elementy są aktualizowane, React decyduje które z nich należy ponownie renderować.

### Wybór kluczy

1. **Najlepszy wybór**: unikalne ID danych
   \`\`\`jsx
   const todoItems = todos.map((todo) =>
     <li key={todo.id}>
       {todo.text}
     </li>
   );
   \`\`\`

2. **Alternatywnie**: indeks jako klucz (używaj tylko gdy nie masz stabilnych ID)
   \`\`\`jsx
   const todoItems = todos.map((todo, index) =>
     <li key={index}>
       {todo.text}
     </li>
   );
   \`\`\`
   
   Używanie indeksów jako kluczy może powodować problemy przy zmianie kolejności elementów.

### Reguły dotyczące kluczy

- Klucze muszą być unikalne wśród rodzeństwa, ale nie globalnie
- Klucze nie są przekazywane do komponentów jako props
- Do tworzenia kluczy najlepiej używać stabilnych, unikalnych identyfikatorów

## Wyodrębnianie komponentów list

Jeśli wyodrębniasz komponent dla elementu listy, umieść klucz na elemencie \`<Component />\`, a nie na elemencie wewnątrz niego:

\`\`\`jsx
// Niepoprawnie
function ListItem({ value }) {
  return (
    <li key={value.toString()}>
      {value}
    </li>
  );
}

// Poprawnie
function ListItem({ value }) {
  return (
    <li>
      {value}
    </li>
  );
}

function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}
\`\`\`

## Renderowanie złożonych list

Dla bardziej złożonych list często potrzebujemy renderować struktury z wieloma poziomami zagnieżdżenia:

\`\`\`jsx
function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          
          <h4>Komentarze:</h4>
          <ul>
            {post.comments.map((comment) => (
              <li key={comment.id}>
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
\`\`\`

## Quest: Aplikacja biblioteczna

Stwórz prostą aplikację do zarządzania biblioteczką książek, która:

1. Wyświetla listę książek z kategoryzacją:
   - Każda książka powinna mieć tytuł, autora, rok wydania i kategorię
   - Książki powinny być pogrupowane według kategorii
2. Umożliwia filtrowanie książek według różnych kryteriów:
   - Kategoria
   - Autor
   - Rok wydania (np. przed/po określonej dacie)
3. Pokazuje statystyki:
   - Liczbę wszystkich książek
   - Liczbę książek w każdej kategorii
   - Najnowszą/najstarszą pozycję

Użyj odpowiednich kluczy dla wszystkich renderowanych list, oraz zaimplementuj zagnieżdżone listy (np. kategorie -> książki -> detale).
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

W tym przykładzie:
- Stan React jest "źródłem prawdy" dla wartości inputa
- \`handleChange\` aktualizuje stan przy każdej zmianie
- Wartość inputa jest zawsze kontrolowana przez stan React

## Różne typy elementów formularza

### Textarea

W HTML, \`<textarea>\` definiuje swoją zawartość jako potomka. W React, \`<textarea>\` używa atrybutu \`value\`:

\`\`\`jsx
function EssayForm() {
  const [essay, setEssay] = useState('');

  const handleChange = (event) => {
    setEssay(event.target.value);
  };

  return (
    <form>
      <label>
        Esej:
        <textarea value={essay} onChange={handleChange} />
      </label>
    </form>
  );
}
\`\`\`

### Select

W React, zamiast używać wybranego atrybutu \`selected\` na opcjach, używamy atrybutu \`value\` na elemencie \`select\`:

\`\`\`jsx
function FruitSelect() {
  const [fruit, setFruit] = useState('coconut');

  const handleChange = (event) => {
    setFruit(event.target.value);
  };

  return (
    <form>
      <label>
        Wybierz ulubiony owoc:
        <select value={fruit} onChange={handleChange}>
          <option value="apple">Jabłko</option>
          <option value="banana">Banan</option>
          <option value="orange">Pomarańcza</option>
          <option value="coconut">Kokos</option>
        </select>
      </label>
    </form>
  );
}
\`\`\`

## Obsługa wielu elementów formularza

Gdy trzeba obsługiwać wiele elementów formularza, można dodać atrybut \`name\` i pozwolić funkcji obsługi zdarzenia wybrać, co robić na podstawie wartości \`event.target.name\`:

\`\`\`jsx
function MultipleInputsForm() {
  const [formState, setFormState] = useState({
    isGoing: true,
    numberOfGuests: 2
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <form>
      <label>
        Czy weźmiesz udział:
        <input
          name="isGoing"
          type="checkbox"
          checked={formState.isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Liczba gości:
        <input
          name="numberOfGuests"
          type="number"
          value={formState.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
\`\`\`

## Alternatywa: Niekontrolowane komponenty

Chociaż zaleca się używanie komponentów kontrolowanych, czasami wygodniej jest użyć niekontrolowanych komponentów z referencjami:

\`\`\`jsx
import { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    alert('Wprowadzono imię: ' + inputRef.current.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input type="text" ref={inputRef} defaultValue="Domyślna wartość" />
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
}
\`\`\`

## Quest: Formularz rejestracji

Stwórz formularz rejestracyjny zawierający następujące pola:
1. Imię i nazwisko (pole tekstowe)
2. Email (pole typu email)
3. Hasło (pole typu password)
4. Potwierdzenie hasła (pole typu password)
5. Data urodzenia (pole typu date)
6. Płeć (radio buttons)
7. Kategorie zainteresowań (checkboxy)
8. Krótki opis (textarea)
9. Kraj (dropdown)

Implementuj następujące funkcjonalności:
- Walidacja formularza (wszystkie pola obowiązkowe)
- Sprawdzanie, czy hasła są identyczne
- Walidacja formatu e-mail
- Wyświetlanie komunikatów o błędach
- Podsumowanie wprowadzonych danych po wysłaniu formularza

Użyj komponentów kontrolowanych i pokaż praktyczne zastosowanie obsługi wielu elementów formularza.
          `
        }
      ]
    },
    {
      id: "mod-react-advanced",
      title: "Zaawansowane koncepcje React",
      completed: false,
      lessons: [
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

## Dlaczego hooki?

- **Ponowne użycie logiki stanu** bez zmiany hierarchii komponentów
- **Uproszczenie złożonych komponentów** poprzez podział na mniejsze funkcje
- **Korzystanie z zaawansowanych funkcji React bez klas** (i bez problemów z \`this\`)
- **Eliminacja duplikacji kodu** w metodach cyklu życia

## Podstawowe hooki

### useState

\`useState\` pozwala funkcyjnym komponentom przechowywać stan lokalny:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  // Deklaracja zmiennej stanu "count" z początkową wartością 0
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
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Podobne do componentDidMount i componentDidUpdate:
  useEffect(() => {
    // Aktualizacja tytułu dokumentu za pomocą API przeglądarki
    document.title = \`Kliknąłeś \${count} razy\`;
    
    // Opcjonalna funkcja czyszcząca (componentWillUnmount):
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Uruchamia się tylko gdy count się zmieni

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

### useContext

\`useContext\` pozwala komponentom funkcyjnym na łatwe używanie React Context:

\`\`\`jsx
import React, { useContext } from 'react';

// Stworzenie kontekstu
const ThemeContext = React.createContext('light');

function ThemedButton() {
  // Użycie kontekstu
  const theme = useContext(ThemeContext);
  
  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#FFF',
                     color: theme === 'dark' ? '#FFF' : '#333' }}>
      Jestem stylizowany przez kontekst!
    </button>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`

## Dodatkowe hooki

- **useReducer** - alternatywa dla useState, przydatna przy złożonej logice stanu
- **useCallback** - zwraca memoizowaną funkcję, która zmienia się tylko gdy zmieniają się jej zależności
- **useMemo** - zwraca memoizowaną wartość, która obliczana jest tylko gdy zmieniają się zależności
- **useRef** - zwraca obiekt ref, którego właściwość .current może być dowolnie modyfikowana
- **useLayoutEffect** - działa jak useEffect, ale uruchamia się synchronicznie po wszystkich mutacjach DOM
- **useDebugValue** - używany do wyświetlania etykiety dla niestandardowych hooków w React DevTools

## Zasady używania hooków

1. **Używaj hooków tylko na najwyższym poziomie** - nie wywoływaj hooków wewnątrz pętli, warunków ani zagnieżdżonych funkcji
2. **Używaj hooków tylko w komponentach React lub niestandardowych hookach** - nie wywoływaj hooków z regularnych funkcji JavaScript

## Tworzenie własnych hooków

Własne hooki pozwalają wyodrębnić logikę stanu do funkcji wielokrotnego użytku:

\`\`\`jsx
import { useState, useEffect } from 'react';

// Własny hook do obsługi statusu online
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    
    function handleOffline() {
      setIsOnline(false);
    }
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return isOnline;
}

// Użycie własnego hooka
function StatusIndicator() {
  const isOnline = useOnlineStatus();
  
  return (
    <div>
      Jesteś {isOnline ? 'online' : 'offline'}
    </div>
  );
}
\`\`\`

## Quest: Hook do obsługi formularza

Stwórz własny hook o nazwie \`useForm\`, który ułatwi obsługę formularzy:

1. Hook powinien przyjmować początkowe wartości formularza
2. Powinien zwracać:
   - aktualny stan formularza
   - funkcję do aktualizacji pól formularza
   - funkcję do resetowania formularza
   - flagę wskazującą czy formularz został zmieniony
3. Zaimplementuj obsługę błędów walidacji
4. Użyj hooka w komponencie formularza do rejestracji lub logowania

Pokaż, jak własny hook może znacznie uprościć i poprawić ponowne użycie kodu formularzy.
          `
        },
        {
          id: "context-api",
          title: "Context API",
          displayTitle: "Context API - zarządzanie globalnym stanem",
          videoUrl: "https://example.com/videos/context-api.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Context API w React

Context API to mechanizm w React, który umożliwia przekazywanie danych przez drzewo komponentów bez konieczności ręcznego przekazywania props na każdym poziomie.

## Kiedy używać Context?

Context jest przeznaczony do współdzielenia danych, które można uznać za "globalne" dla drzewa komponentów React, takich jak:
- Bieżący zalogowany użytkownik
- Motyw (ciemny/jasny)
- Ustawienia języka
- Autoryzacja
- Preferencje użytkownika

## Podstawowe użycie Context

### 1. Tworzenie kontekstu

\`\`\`jsx
// ThemeContext.js
import { createContext } from 'react';

// Domyślna wartość (używana gdy komponent nie ma pasującego Providera)
const ThemeContext = createContext('light');

export default ThemeContext;
\`\`\`

### 2. Dostarczanie kontekstu (Provider)

\`\`\`jsx
// App.js
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <Main />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Przełącz motyw
      </button>
    </ThemeContext.Provider>
  );
}
\`\`\`

### 3. Konsumpcja kontekstu

#### Używając hooka useContext (zalecane w komponentach funkcyjnych):

\`\`\`jsx
// ThemedButton.js
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333'
  };
  
  return <button style={style}>Jestem {theme}</button>;
}
\`\`\`

#### Używając Context.Consumer:

\`\`\`jsx
// ThemedButton.js
import ThemeContext from './ThemeContext';

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {theme => {
        const style = {
          backgroundColor: theme === 'dark' ? '#333' : '#FFF',
          color: theme === 'dark' ? '#FFF' : '#333'
        };
        
        return <button style={style}>Jestem {theme}</button>;
      }}
    </ThemeContext.Consumer>
  );
}
\`\`\`

## Aktualizacja kontekstu

Aby umożliwić aktualizację kontekstu, zwykle przekazujemy funkcję aktualizującą jako część wartości kontekstu:

\`\`\`jsx
// ThemeContext.js
import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export default ThemeContext;

// App.js
function App() {
  const [theme, setTheme] = useState('light');
  
  const themeData = {
    theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
  };
  
  return (
    <ThemeContext.Provider value={themeData}>
      <Main />
    </ThemeContext.Provider>
  );
}

// ThemedButton.js
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      style={{ background: theme === 'dark' ? '#333' : '#FFF' }}
      onClick={toggleTheme}
    >
      Przełącz motyw
    </button>
  );
}
\`\`\`

## Zaawansowane wzorce

### Rozdzielenie definicji od Providera

Warto tworzyć oddzielny plik dla definicji kontekstu i komponentu Provider:

\`\`\`jsx
// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = {
    theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook dla łatwiejszego użycia
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
\`\`\`

### Używanie:

\`\`\`jsx
// App.js
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

// ThemedButton.js
import { useTheme } from './ThemeContext';

function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      style={{ background: theme === 'dark' ? '#333' : '#FFF' }}
      onClick={toggleTheme}
    >
      Przełącz motyw
    </button>
  );
}
\`\`\`

## Quest: Implementacja autoryzacji z Context API

Stwórz system autoryzacji używając Context API, który będzie:

1. Przechowywał stan zalogowanego użytkownika i token autoryzacyjny
2. Udostępniał funkcje login(), logout() i register()
3. Kontrolował dostęp do chronionych tras i komponentów
4. Zachowywał sesję użytkownika między odświeżeniami strony (używając localStorage)
5. Wysyłał token autoryzacyjny w nagłówkach żądań HTTP

Zaimplementuj komponenty:
- LoginForm - formularz logowania
- RegisterForm - formularz rejestracji
- ProtectedRoute - komponent opakowujący, który pokazuje zawartość tylko dla zalogowanych użytkowników
- UserProfile - strona profilu użytkownika, która wyświetla dane użytkownika

Pokaż jak Context API może być używany w rzeczywistej aplikacji do zarządzania globalnym stanem.
          `
        },
        {
          id: "routing-spa",
          title: "Routing w React",
          displayTitle: "Routing w aplikacjach jednostronicowych",
          videoUrl: "https://example.com/videos/routing-spa.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Routing w React - React Router

React Router to standardowa biblioteka do obsługi routingu w aplikacjach React. Umożliwia ona tworzenie aplikacji jednostronicowych (SPA) z wieloma "stronami" bez przeładowania strony.

## Podstawy React Router

React Router składa się z kilku podstawowych komponentów:

- **BrowserRouter** - komponent nadrzędny, który używa HTML5 History API
- **Route** - definiuje mapowanie między ścieżką URL a komponentem
- **Switch** - renderuje tylko pierwszą pasującą ścieżkę
- **Link** - generuje linki do nawigacji między stronami
- **NavLink** - rozszerza Link o możliwość stylizacji aktywnych linków

### Instalacja

\`\`\`
npm install react-router-dom
\`\`\`

### Podstawowa konfiguracja

\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/about">O nas</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
\`\`\`

## Parametry URL

Możemy przekazywać parametry przez URL:

\`\`\`jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<UserList />} />
  <Route path="/users/:userId" element={<UserProfile />} />
</Routes>

// W komponencie UserProfile:
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <div>Profil użytkownika {userId}</div>;
}
\`\`\`

## Programowa nawigacja

Możemy nawigować programowo:

\`\`\`jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika logowania...
    
    // Po udanym logowaniu:
    navigate('/dashboard');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Pola formularza... */}
      <button type="submit">Zaloguj</button>
    </form>
  );
}
\`\`\`

## Zagnieżdżone trasy

Możemy zagnieżdżać trasy, co jest przydatne do tworzenia złożonych layoutów:

\`\`\`jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="dashboard" element={<Dashboard />}>
      <Route index element={<DashboardHome />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Route>
</Routes>

// Layout.js
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Tu pojawi się zagnieżdżona trasa */}
      <Footer />
    </div>
  );
}
\`\`\`

## Chronione trasy

Możemy tworzyć chronione trasy wymagające logowania:

\`\`\`jsx
function PrivateRoute({ element }) {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

// Użycie:
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route
    path="/dashboard"
    element={<PrivateRoute element={<Dashboard />} />}
  />
</Routes>
\`\`\`

## Query parameters

Możemy korzystać z parametrów zapytania:

\`\`\`jsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const filter = searchParams.get('filter') || 'all';
  
  // Używamy query i filter do pobierania wyników
  
  return (
    <div>
      <h1>Wyniki wyszukiwania dla: {query}</h1>
      
      {/* Aktualizacja parametrów bez przeładowania strony */}
      <select
        value={filter}
        onChange={e => setSearchParams({ q: query, filter: e.target.value })}
      >
        <option value="all">Wszystkie</option>
        <option value="new">Nowe</option>
        <option value="popular">Popularne</option>
      </select>
      
      {/* Wyniki... */}
    </div>
  );
}
\`\`\`

## Quest: Aplikacja e-commerce z routingiem

Stwórz prostą aplikację e-commerce z następującymi trasami:

1. Strona główna (`/`) - wyświetla polecane produkty
2. Lista produktów (`/products`) - wyświetla wszystkie produkty z możliwością filtrowania
3. Szczegóły produktu (`/products/:productId`) - wyświetla szczegóły konkretnego produktu
4. Koszyk (`/cart`) - wyświetla produkty dodane do koszyka
5. Finalizacja zamówienia (`/checkout`) - formularz finalizacji zamówienia (chroniona trasa)
6. Logowanie (`/login`) - formularz logowania
7. Panel użytkownika (`/account`) - panel użytkownika (chroniona trasa)

Dodatkowo:
- Zaimplementuj nawigację i menu
- Użyj parametrów zapytania do filtrowania produktów
- Stwórz mechanizm chronienia tras dla zalogowanych użytkowników
- Dodaj przekierowanie z nieistniejących tras do strony 404

Pokaż, jak React Router pomaga tworzyć intuicyjne i funkcjonalne interfejsy użytkownika.
          `
        },
        {
          id: "api-fetching",
          title: "Pobieranie danych z API",
          displayTitle: "Efektywne pobieranie danych w React",
          videoUrl: "https://example.com/videos/api-fetching.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Pobieranie danych z API w React

Pobieranie danych z zewnętrznych API jest kluczowym aspektem większości nowoczesnych aplikacji React. Istnieje wiele sposobów realizacji tego zadania.

## Podstawowe pobieranie danych z useEffect

Najprostszym sposobem jest użycie hooka \`useEffect\` wraz z Fetch API:

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (e) {
        setError(`Wystąpił błąd: ${e.message}`);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []); // Pusta tablica zależności - efekt uruchamia się tylko przy montowaniu

  if (loading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Tworzenie własnego hooka do pobierania danych

Możemy wyodrębnić logikę pobierania danych do własnego hooka:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (e) {
        if (isMounted) {
          setError(`Problem z pobraniem danych: ${e.message}`);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();
    
    // Funkcja czyszcząca sprawdza czy komponent jest nadal zamontowany
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

// Użycie:
function UserList() {
  const { data: users, loading, error } = useFetch('https://api.example.com/users');

  if (loading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd: {error}</div>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Używanie biblioteki Axios

Axios to popularna biblioteka do wykonywania żądań HTTP:

\`\`\`jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await axios.get('https://api.example.com/users', {
          cancelToken: source.token
        });
        
        setUsers(response.data);
        setError(null);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log('Żądanie anulowane:', e.message);
        } else {
          setError(`Wystąpił błąd: ${e.message}`);
          setUsers([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    
    // Funkcja czyszcząca anuluje żądanie, jeśli komponent zostanie odmontowany
    return () => {
      source.cancel('Komponent odmontowany');
    };
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
        },
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

## Przykład - zegar odświeżany co sekundę

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    // Funkcja czyszcząca
    return () => {
      clearInterval(timerID);
    };
  }, []); // Pusta tablica zależności - efekt działa tylko przy montowaniu i odmontowywaniu
  
  return (
    <div>
      <h2>Aktualny czas:</h2>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  );
}
\`\`\`
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

### Alternatywne sposoby:

1. **Funkcje strzałkowe w właściwościach klasy** (syntax eksperymentalny):
   \`\`\`jsx
   class Toggle extends React.Component {
     state = {isToggleOn: true};
     
     handleClick = () => {
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

2. **Funkcje strzałkowe w JSX**:
   \`\`\`jsx
   class Toggle extends React.Component {
     state = {isToggleOn: true};
     
     render() {
       return (
         <button onClick={() => {
           this.setState(prevState => ({
             isToggleOn: !prevState.isToggleOn
           }));
         }}>
           {this.state.isToggleOn ? 'ON' : 'OFF'}
         </button>
       );
     }
   }
   \`\`\`

## Przekazywanie argumentów do handlera

\`\`\`jsx
// Używając funkcji strzałkowej
<button onClick={(e) => this.deleteItem(id, e)}>Usuń</button>

// Używając bind
<button onClick={this.deleteItem.bind(this, id)}>Usuń</button>
\`\`\`

## Najczęściej używane zdarzenia

- \`onClick\` - kliknięcie
- \`onChange\` - zmiana w polu formularza
- \`onSubmit\` - wysłanie formularza
- \`onMouseEnter\`, \`onMouseLeave\` - zdarzenia myszy
- \`onKeyDown\`, \`onKeyUp\` - zdarzenia klawiatury
- \`onFocus\`, \`onBlur\` - fokusowanie elementu

## Quest: Prosta aplikacja Todo

Stwórz prostą aplikację Todo w React, która umożliwia:
1. Dodawanie nowych zadań poprzez formularz
2. Zaznaczanie zadań jako ukończone
3. Usuwanie zadań z listy

Aplikacja powinna posiadać komponenty:
- \`TodoApp\` - główny komponent aplikacji
- \`TodoForm\` - formularz do dodawania zadań
- \`TodoList\` - lista wszystkich zadań
- \`TodoItem\` - pojedyncze zadanie

Użyj zdarzeń \`onSubmit\`, \`onChange\` i \`onClick\` do obsługi interakcji. Wykorzystaj stan (useState) do przechowywania listy zadań.
          `
        },
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

Operatory logiczne JavaScript pozwalają na zwięzłe warunkowe renderowanie:

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

## Zaawansowane techniki

### Zmienne pomocnicze

\`\`\`jsx
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}
\`\`\`

### Renderowanie map z warunkowym filtrowaniem

\`\`\`jsx
function TaskList({ tasks, showCompleted }) {
  return (
    <ul>
      {tasks
        .filter(task => showCompleted || !task.completed)
        .map(task => (
          <li key={task.id}>
            {task.text}
          </li>
        ))
      }
    </ul>
  );
}
\`\`\`

### Używanie bibliotek warunkowego renderowania

Biblioteki takie jak \`lodash\` mogą pomóc w złożonym renderowaniu warunkowym.

## Quest: Aplikacja pogodowa z różnymi warunkami

Stwórz aplikację, która wyświetla różne komponenty w zależności od warunków pogodowych:

1. Komponent \`WeatherApp\` powinien przyjmować aktualną temperaturę i stan pogody (np. "słonecznie", "deszczowo", "śnieżnie")
2. W zależności od stanu, powinien renderować różne komponenty:
   - \`SunnyDisplay\` gdy jest słonecznie
   - \`RainyDisplay\` gdy jest deszczowo
   - \`SnowyDisplay\` gdy jest śnieżnie
3. Gdy temperatura jest powyżej 30°C, powinien dodatkowo wyświetlać alert o upale
4. Gdy temperatura jest poniżej 0°C, powinien wyświetlać alert o mrozie
5. Dodaj przełącznik między stopniami Celsjusza a Fahrenheita

Użyj wszystkich poznanych technik: if-else, wyrażenia warunkowe, operatory logiczne i zmienne pomocnicze.
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

const numbers = [1, 2, 3, 4, 5];
<NumberList numbers={numbers} />
\`\`\`

Możemy również umieścić wyrażenie \`map()\` bezpośrednio w JSX:

\`\`\`jsx
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      )}
    </ul>
  );
}
\`\`\`

## Klucze (Keys)

Klucze pomagają React identyfikować elementy listy. Gdy elementy są aktualizowane, React decyduje które z nich należy ponownie renderować.

### Wybór kluczy

1. **Najlepszy wybór**: unikalne ID danych
   \`\`\`jsx
   const todoItems = todos.map((todo) =>
     <li key={todo.id}>
       {todo.text}
     </li>
   );
   \`\`\`

2. **Alternatywnie**: indeks jako klucz (używaj tylko gdy nie masz stabilnych ID)
   \`\`\`jsx
   const todoItems = todos.map((todo, index) =>
     <li key={index}>
       {todo.text}
     </li>
   );
   \`\`\`
   
   Używanie indeksów jako kluczy może powodować problemy przy zmianie kolejności elementów.

### Reguły dotyczące kluczy

- Klucze muszą być unikalne wśród rodzeństwa, ale nie globalnie
- Klucze nie są przekazywane do komponentów jako props
- Do tworzenia kluczy najlepiej używać stabilnych, unikalnych identyfikatorów

## Wyodrębnianie komponentów list

Jeśli wyodrębniasz komponent dla elementu listy, umieść klucz na elemencie \`<Component />\`, a nie na elemencie wewnątrz niego:

\`\`\`jsx
// Niepoprawnie
function ListItem({ value }) {
  return (
    <li key={value.toString()}>
      {value}
    </li>
  );
}

// Poprawnie
function ListItem({ value }) {
  return (
    <li>
      {value}
    </li>
  );
}

function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}
\`\`\`

## Renderowanie złożonych list

Dla bardziej złożonych list często potrzebujemy renderować struktury z wieloma poziomami zagnieżdżenia:

\`\`\`jsx
function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          
          <h4>Komentarze:</h4>
          <ul>
            {post.comments.map((comment) => (
              <li key={comment.id}>
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
\`\`\`

## Quest: Aplikacja biblioteczna

Stwórz prostą aplikację do zarządzania biblioteczką książek, która:

1. Wyświetla listę książek z kategoryzacją:
   - Każda książka powinna mieć tytuł, autora, rok wydania i kategorię
   - Książki powinny być pogrupowane według kategorii
2. Umożliwia filtrowanie książek według różnych kryteriów:
   - Kategoria
   - Autor
   - Rok wydania (np. przed/po określonej dacie)
3. Pokazuje statystyki:
   - Liczbę wszystkich książek
   - Liczbę książek w każdej kategorii
   - Najnowszą/najstarszą pozycję

Użyj odpowiednich kluczy dla wszystkich renderowanych list, oraz zaimplementuj zagnieżdżone listy (np. kategorie -> książki -> detale).
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

W tym przykładzie:
- Stan React jest "źródłem prawdy" dla wartości inputa
- \`handleChange\` aktualizuje stan przy każdej zmianie
- Wartość inputa jest zawsze kontrolowana przez stan React

## Różne typy elementów formularza

### Textarea

W HTML, \`<textarea>\` definiuje swoją zawartość jako potomka. W React, \`<textarea>\` używa atrybutu \`value\`:

\`\`\`jsx
function EssayForm() {
  const [essay, setEssay] = useState('');

  const handleChange = (event) => {
    setEssay(event.target.value);
  };

  return (
    <form>
      <label>
        Esej:
        <textarea value={essay} onChange={handleChange} />
      </label>
    </form>
  );
}
\`\`\`

### Select

W React, zamiast używać wybranego atrybutu \`selected\` na opcjach, używamy atrybutu \`value\` na elemencie \`select\`:

\`\`\`jsx
function FruitSelect() {
  const [fruit, setFruit] = useState('coconut');
