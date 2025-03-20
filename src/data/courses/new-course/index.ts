import { Course } from "@/types/course";

export const newCourse: Course = {
  id: "flowise-ai",
  title: "Flowise AI - Tworzenie Przepływów AI",
  description: "Kompletny kurs wprowadzający do tworzenia zaawansowanych przepływów AI przy pomocy platformy Flowise AI.",
  progress: 0,
  modules: [
    {
      id: "mod-flowise-basics",
      title: "Flowise AI",
      completed: false,
      lessons: [
        {
          id: "flowise-introduction",
          title: "Wprowadzenie",
          displayTitle: "Wprowadzenie do Flowise AI",
          completed: false,
          additionalVideos: [
            {
              title: "Film 1",
              videoUrl: "https://example.com/videos/flowise-intro-1.mp4",
              thumbnailUrl: "/placeholder.svg"
            },
            {
              title: "Film 2",
              videoUrl: "https://example.com/videos/flowise-intro-2.mp4",
              thumbnailUrl: "/placeholder.svg"
            }
          ],
          description: `
# Wprowadzenie do Flowise AI

Flowise to narzędzie, które rewolucjonizuje tworzenie aplikacji opartych na sztucznej inteligencji, szczególnie tych korzystających z dużych modeli językowych (LLM). Dzięki niemu, osoby bez zaawansowanej wiedzy programistycznej mogą budować interaktywne chatboty, systemy analizy tekstu oraz aplikacje oparte na konwersacjach AI. Flowise pozwala na projektowanie interfejsów graficznych, integrację z różnymi modelami oraz efektywne zarządzanie danymi wejściowymi i wyjściowymi.

## Wprowadzenie do Dużych Modeli Językowych (LLM)

Duże modele językowe, takie jak GPT-3, GPT-4 czy Gemini od Google, są rdzeniem współczesnych technologii przetwarzania języka naturalnego (NLP). Te modele są trenowane na ogromnych zbiorach danych językowych, co pozwala im generować odpowiedzi na pytania, analizować teksty, a nawet prowadzić rozbudowane konwersacje, zbliżone do interakcji z człowiekiem.

Jednym z kluczowych aspektów działania LLM są tokeny. Tokeny to jednostki tekstu – mogą to być słowa, znaki lub fragmenty zdań – które są analizowane przez model. Kiedy wpisujemy zdanie, jest ono rozbijane na tokeny, które model przetwarza, aby odpowiedzieć w sposób spójny i zrozumiały.

Aby lepiej zrozumieć, czym są tokeny i jak działają, warto odwiedzić narzędzia takie jak strona OpenAI, gdzie można zobaczyć, jak GPT przetwarza tekst na tokeny i w jaki sposób analizuje je, aby wygenerować odpowiedzi.

## Przetwarzanie Kontekstu przez Modele Językowe

Ważne jest zrozumienie, że modele językowe, mimo zaawansowania, nie "pamiętają" poprzednich rozmów w taki sposób, jak moglibyśmy to sobie wyobrażać. Każda nowa odpowiedź jest generowana na podstawie nowego zapytania (promptu), który może zawierać skrótową historię wcześniejszej konwersacji.

Na przykład, w modelach takich jak GPT-4, istnieje ograniczenie liczby tokenów, które można przetworzyć jednocześnie. GPT-4 może obsłużyć do 128 tysięcy tokenów (około 300 stron tekstu), podczas gdy GPT-3.5 – jedynie 16 tysięcy tokenów (około 14 stron). Choć nowszy model GPT-4 oferuje większe możliwości, nie zawsze jest konieczne jego użycie. GPT-3.5, mimo mniejszej liczby tokenów, działa szybciej i jest wystarczający do prostszych zadań.

## Wybór Modelu do Twojej Aplikacji

Wybór odpowiedniego modelu zależy od specyfiki zadania. Do zadań prostszych, gdzie kluczowa jest szybkość odpowiedzi, GPT-3.5 jest często lepszym wyborem. Z kolei przy bardziej skomplikowanych zagadnieniach, wymagających dogłębnej analizy czy szczegółowej wiedzy, warto sięgnąć po GPT-4. Warto też pamiętać, że istnieją inne modele, takie jak Falcon 40B, które oferują jeszcze większe możliwości przetwarzania języka.

## Dogłębniejsze objaśnienie terminów:

### 1. Duże Modele Językowe (LLM)

LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi. Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.

### 2. Tokeny

Tokeny to podstawowe jednostki tekstu wykorzystywane przez modele językowe. Można je zrozumieć jako słowa, znaki lub fragmenty zdań, na które model dzieli wejściowy tekst. Przykładowo, zdanie "ChatGPT to świetne narzędzie" może zostać podzielone na kilka tokenów: "Chat", "GPT", "to", "świetne", "narzędzie". Modele takie jak GPT-3 czy GPT-4 operują właśnie na tych tokenach, analizując je i na tej podstawie generując odpowiedzi.

GPT-4: Obsługuje do 128 tysięcy tokenów (ok. 300 stron tekstu).

GPT-3.5: Obsługuje do 16 tysięcy tokenów (ok. 14 stron tekstu).

Rozumienie liczby tokenów jest ważne przy budowaniu aplikacji, ponieważ wpływa to na długość konwersacji, którą model może „zapamiętać" oraz przetworzyć.

### 3. Prompt (Zapytanie)

Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, która zawiera historię rozmowy. W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.

### 4. Konwersacja i Kontekst

Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.

### 5. Wydajność a Skomplikowanie Modelu

W kontekście wyboru modelu do aplikacji warto znać różnice między różnymi wersjami:

GPT-3.5: Szybszy, ale obsługuje mniejszą liczbę tokenów. Idealny do prostszych zadań.

GPT-4: Wolniejszy, ale bardziej precyzyjny i obsługujący większą ilość tokenów. Lepszy do zaawansowanych analiz i długich konwersacji.

Oprócz modeli GPT, istnieją także inne modele, takie jak Falcon 40B, które oferują różne zalety w zależności od specyfiki aplikacji.

### 6. Model Falcon 40B

Falcon 40B to jeden z zaawansowanych modeli językowych o dużych możliwościach. Został zaprojektowany do przetwarzania jeszcze większej liczby tokenów niż GPT-4, co pozwala na generowanie bardziej rozbudowanych i kontekstowo bogatych odpowiedzi. Tego typu modele są szczególnie przydatne w aplikacjach wymagających dużej precyzji oraz złożonych analiz tekstu.

## Podsumowanie

Flowise daje użytkownikom możliwość tworzenia zaawansowanych aplikacji konwersacyjnych w oparciu o LLM, bez potrzeby znajomości programowania. Zrozumienie działania tokenów oraz wyboru odpowiedniego modelu pozwala na lepsze dostosowanie aplikacji do konkretnych potrzeb. Ostatecznie, wybór narzędzi i modelu zależy od celu aplikacji – czy to szybkie odpowiedzi, czy bardziej skomplikowane analizy. Dzięki takim rozwiązaniom, jak Flowise, tworzenie aplikacji AI staje się bardziej dostępne niż kiedykolwiek.
          `
        },
        {
          id: "flowise-installation",
          title: "Instalacja",
          displayTitle: "Instalacja Flowise AI",
          videoUrl: "https://example.com/videos/flowise-installation.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Instalacja Flowise AI

Flowise AI można zainstalować na kilka sposobów, w zależności od twoich potrzeb i środowiska. W tej lekcji omówimy najbardziej popularne metody instalacji.

## Wymagania wstępne

Przed rozpoczęciem instalacji upewnij się, że posiadasz:

- Node.js (wersja 18 lub nowsza)
- NPM (Node Package Manager)
- Dostęp do terminala/wiersza poleceń

## Metoda 1: Instalacja globalna przez NPM

Najszybszym i najprostszym sposobem na rozpoczęcie pracy z Flowise jest instalacja globalna przez NPM:

\`\`\`bash
npm install -g flowise
\`\`\`

Po zakończeniu instalacji, możesz uruchomić Flowise za pomocą komendy:

\`\`\`bash
npx flowise start
\`\`\`

Ta komenda uruchomi serwer Flowise oraz interfejs użytkownika, który domyślnie będzie dostępny pod adresem \`http://localhost:3000\`.

## Metoda 2: Klonowanie repozytorium GitHub

Jeśli chcesz mieć więcej kontroli nad kodem źródłowym lub planujesz wprowadzać własne modyfikacje, możesz sklonować oficjalne repozytorium GitHub:

\`\`\`bash
git clone https://github.com/FlowiseAI/Flowise.git
\`\`\`

Następnie, przejdź do sklonowanego katalogu i zainstaluj zależności:

\`\`\`bash
cd Flowise
npm install
\`\`\`

Teraz możesz zbudować i uruchomić aplikację:

\`\`\`bash
npm run build
npm start
\`\`\`

## Metoda 3: Używanie Docker

Jeśli preferujesz używanie kontenerów Docker, Flowise udostępnia oficjalny obraz Docker:

\`\`\`bash
docker run -d --name flowise -p 3000:3000 flowiseai/flowise
\`\`\`

Możesz również użyć Docker Compose, tworząc plik \`docker-compose.yml\`:

\`\`\`yaml
version: '3'
services:
  flowise:
    image: flowiseai/flowise
    ports:
      - "3000:3000"
    volumes:
      - ~/.flowise:/root/.flowise
    environment:
      - PORT=3000
      - DATABASE_PATH=/root/.flowise
      - APIKEY_PATH=/root/.flowise
\`\`\`

A następnie uruchamiając:

\`\`\`bash
docker-compose up -d
\`\`\`

## Konfiguracja po instalacji

Po pomyślnej instalacji i uruchomieniu Flowise, powinieneś móc uzyskać dostęp do interfejsu użytkownika pod adresem \`http://localhost:3000\` (lub innym portem, jeśli został zmieniony).

### Ustawienia środowiskowe

Flowise obsługuje różne zmienne środowiskowe, które można skonfigurować tworząc plik \`.env\` w głównym katalogu:

\`\`\`
PORT=3000
DATABASE_TYPE=sqlite
DATABASE_PATH=~/.flowise
APIKEY_PATH=~/.flowise
LOG_PATH=~/.flowise/logs
BLOB_STORAGE_PATH=~/.flowise/storage
\`\`\`

## Weryfikacja instalacji

Aby zweryfikować, że Flowise został poprawnie zainstalowany:

1. Otwórz przeglądarkę i przejdź do \`http://localhost:3000\`
2. Powinieneś zobaczyć interfejs użytkownika Flowise z pustym obszarem roboczym
3. Kliknij przycisk "Utwórz nowy przepływ", aby utworzyć swój pierwszy projekt

W następnej lekcji dowiemy się jak aktualizować Flowise do najnowszych wersji.
          `
        },
        {
          id: "flowise-updating",
          title: "Aktualizowanie",
          displayTitle: "Aktualizowanie Flowise AI",
          videoUrl: "https://example.com/videos/flowise-updating.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Aktualizowanie Flowise AI

Regularne aktualizacje Flowise AI są ważne, aby mieć dostęp do najnowszych funkcji, komponentów i poprawek bezpieczeństwa. W tej lekcji dowiesz się, jak skutecznie aktualizować i zarządzać swoją instalacją Flowise.

## Sprawdzanie aktualnej wersji

Przed aktualizacją warto sprawdzić, jaką wersję Flowise obecnie używasz. Możesz to zrobić na kilka sposobów:

1. **W interfejsie użytkownika** - numer wersji jest zwykle wyświetlany w dolnej części panelu bocznego.
2. **W terminalu** - jeśli zainstalowałeś Flowise globalnie, możesz użyć:
   \`\`\`bash
   npx flowise --version
   \`\`\`

## Aktualizacja instalacji globalnej NPM

Jeśli zainstalowałeś Flowise globalnie za pomocą NPM, aktualizacja jest bardzo prosta:

\`\`\`bash
npm update -g flowise
\`\`\`

Po zakończeniu aktualizacji, uruchom ponownie Flowise:

\`\`\`bash
npx flowise start
\`\`\`

## Aktualizacja instalacji z GitHub

Jeśli sklonowałeś repozytorium GitHub, wykonaj następujące kroki, aby zaktualizować do najnowszej wersji:

1. Przejdź do katalogu projektu:
   \`\`\`bash
   cd ścieżka/do/twojego/Flowise
   \`\`\`

2. Pobierz najnowsze zmiany z repozytorium:
   \`\`\`bash
   git pull origin main
   \`\`\`

3. Zainstaluj nowe zależności:
   \`\`\`bash
   npm install
   \`\`\`

4. Zbuduj projekt na nowo:
   \`\`\`bash
   npm run build
   \`\`\`

5. Uruchom zaktualizowaną wersję:
   \`\`\`bash
   npm start
   \`\`\`

## Aktualizacja za pomocą Docker

Jeśli używasz Dockera, musisz pobrać najnowszy obraz i utworzyć nowy kontener:

1. Pobierz najnowszy obraz:
   \`\`\`bash
   docker pull flowiseai/flowise:latest
   \`\`\`

2. Zatrzymaj i usuń aktualny kontener:
   \`\`\`bash
   docker stop flowise
   docker rm flowise
   \`\`\`

3. Utwórz nowy kontener z najnowszym obrazem:
   \`\`\`bash
   docker run -d --name flowise -p 3000:3000 -v ~/.flowise:/root/.flowise flowiseai/flowise:latest
   \`\`\`

## Quest: Plan aktualizacji Flowise

Jako zadanie praktyczne, stwórz kompleksowy plan aktualizacji dla instalacji Flowise w środowisku produkcyjnym:

1. Opracuj strategię tworzenia kopii zapasowych przed aktualizacją, uwzględniającą:
   - Eksport wszystkich przepływów jako pliki JSON
   - Kopię zapasową bazy danych i plików konfiguracyjnych
   - Dokumentację obecnych ustawień i zmiennych środowiskowych

2. Zaplanuj okno serwisowe dla aktualizacji:
   - Wybierz czas niskiego ruchu
   - Przygotuj komunikat dla użytkowników
   - Oszacuj czas potrzebny na aktualizację

3. Stwórz listę kontrolną procesu aktualizacji:
   - Kroki weryfikacji kopii zapasowych
   - Sekwencja poleceń do wykonania
   - Punkty kontrolne do sprawdzenia po każdym kroku

4. Opracuj plan awaryjny:
   - Procedura przywracania poprzedniej wersji
   - Kroki odzyskiwania danych z kopii zapasowych
   - Osoby kontaktowe w przypadku problemów

5. Przygotuj listę testów po aktualizacji:
   - Sprawdzenie dostępności interfejsu
   - Weryfikacja działania kluczowych przepływów
   - Testy integracji z zewnętrznymi systemami

Przedstaw swój plan w formie dokumentu, który mógłby służyć jako standardowa procedura operacyjna dla przyszłych aktualizacji.
          `
        },
        {
          id: "flowise-basics",
          title: "Podstawy",
          displayTitle: "Podstawy Flowise AI",
          videoUrl: "https://example.com/videos/flowise-basics.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Podstawy Flowise AI

W tej lekcji poznasz podstawowe koncepcje Flowise AI oraz jak zacząć tworzyć swoje pierwsze przepływy. Nawet bez doświadczenia w programowaniu, będziesz w stanie stworzyć własne aplikacje AI.

## Interfejs użytkownika Flowise

Po uruchomieniu Flowise i otwarciu go w przeglądarce, zobaczysz interfejs użytkownika składający się z kilku głównych elementów:

1. **Pasek boczny** - zawiera listę przepływów i pozwala na tworzenie nowych
2. **Obszar roboczy** - główny obszar do wizualnego projektowania przepływów
3. **Panel komponentów** - lista dostępnych bloków, które można dodać do przepływu
4. **Panel konfiguracji** - miejsce do konfiguracji wybranych komponentów
5. **Pasek narzędzi** - zawiera funkcje takie jak zapisywanie, testowanie i wdrażanie

## Kluczowe koncepcje

Zanim zaczniesz tworzyć przepływy, ważne jest zrozumienie kilku podstawowych koncepcji:

### Przepływy (Flows)

Przepływ to wizualna reprezentacja sekwencji kroków, które aplikacja AI będzie wykonywać. Składa się z połączonych ze sobą węzłów (komponentów), które przetwarzają dane w określony sposób.

### Komponenty (Nodes)

Komponenty to bloki budulcowe przepływu. Każdy komponent ma określoną funkcję, wejścia i wyjścia. Komponenty mogą być:
- Modelami językowymi (jak GPT-4, Claude)
- Narzędziami do przetwarzania danych
- Pamięcią
- Łącznikami do baz danych
- Elementami logiki i warunkowania

### Połączenia (Connections)

Połączenia określają, jak dane przepływają między komponentami. Każde połączenie zaczyna się od wyjścia jednego komponentu i kończy na wejściu innego.

### Zmienne (Variables)

Zmienne pozwalają na przechowywanie i przekazywanie informacji między różnymi częściami przepływu.

## Podstawowe typy komponentów

Flowise oferuje różne kategorie komponentów:

1. **Modele językowe (LLMs)** - takie jak OpenAI, Antropic Claude, Llama, Mistral
2. **Embeddingi** - konwertują tekst na wektory liczbowe
3. **Pamięć** - przechowują historię konwersacji
4. **Łańcuchy** - łączą komponenty w sekwencje operacji
5. **Narzędzia** - dodają specjalne funkcje jak kalkulatory czy wyszukiwarki
6. **Źródła danych** - łączą z bazami danych i dokumentami
7. **Parsery** - przetwarzają dane w różnych formatach
8. **Wyjścia** - udostępniają wyniki użytkownikowi

## Podstawowe operacje

Podczas pracy z Flowise będziesz wykonywać następujące operacje:

1. **Tworzenie przepływu** - rozpoczęcie nowego projektu
2. **Dodawanie komponentów** - przeciąganie ich z panelu na obszar roboczy
3. **Konfiguracja komponentów** - ustawianie parametrów w panelu konfiguracji
4. **Łączenie komponentów** - tworzenie połączeń między wyjściami i wejściami
5. **Testowanie** - uruchamianie przepływu, aby sprawdzić jego działanie
6. **Zapisywanie i eksportowanie** - zachowywanie pracy i dzielenie się nią
7. **Wdrażanie** - udostępnianie przepływu jako API lub chatbota

## Pierwsze kroki

Aby rozpocząć pracę z Flowise:

1. Uruchom aplikację i przejdź do interfejsu użytkownika
2. Kliknij "Nowy przepływ" i nadaj mu nazwę
3. Zapoznaj się z dostępnymi komponentami
4. Spróbuj stworzyć prosty przepływ, np. chatbota opartego o model GPT

W kolejnych lekcjach będziemy budować coraz bardziej zaawansowane przepływy, wykorzystując pełen potencjał Flowise AI.
          `
        },
        {
          id: "flowise-first-flow",
          title: "Pierwszy flow",
          displayTitle: "Tworzenie pierwszego flow w Flowise AI",
          videoUrl: "https://example.com/videos/flowise-first-flow.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Tworzenie pierwszego flow w Flowise AI

W tej lekcji stworzymy od początku do końca kompletny przepływ AI, który potrafi odpowiadać na pytania na podstawie własnych dokumentów. Ten typ aplikacji jest często nazywany chatbotem opartym o dokumenty (document-based chatbot).

## Planowanie przepływu

Przed rozpoczęciem pracy, warto zaplanować, co nasz przepływ ma osiągnąć:

1. Załadować i przetworzyć dokumenty (PDF, teksty, itp.)
2. Przekształcić dokumenty w formę zrozumiałą dla AI (wektory)
3. Przechowywać te reprezentacje w bazie wektorowej
4. Przyjmować pytania od użytkownika
5. Wyszukiwać odpowiednie fragmenty dokumentów
6. Formułować odpowiedzi na podstawie tych fragmentów i modelu językowego

## Krok 1: Przygotowanie dokumentów

Najpierw musimy dodać komponenty do ładowania i przetwarzania dokumentów:

1. **Dodaj komponent ładowania dokumentów**:
   - Przeciągnij "Document Loaders" na obszar roboczy
   - Skonfiguruj go wybierając typ pliku (np. PDF, CSV, TXT)
   - Dodaj ścieżkę do dokumentu lub URL

2. **Dodaj komponent rozdzielania tekstu**:
   - Przeciągnij "Text Splitter" i połącz go z wyjściem komponentu ładowania
   - Skonfiguruj parametry jak rozmiar kawałka (chunk size) i nakładanie się (overlap)
   - Zalecane ustawienia początkowe: chunk size 1000, overlap 200

## Krok 2: Tworzenie bazy wektorowej

Teraz przekształcimy dokumenty w wektory i zapiszemy je:

1. **Dodaj model embeddings**:
   - Przeciągnij model "Embeddings" (np. OpenAIEmbeddings)
   - Skonfiguruj go podając klucz API jeśli jest wymagany

2. **Dodaj bazę wektorową**:
   - Przeciągnij "Vector Store" (np. FAISS, Chroma, Pinecone)
   - Połącz wyjście "Text Splitter" i "Embeddings" do wejść "Vector Store"
   - Skonfiguruj opcje przechowywania (pamięć lub dysk)

## Krok 3: Konfiguracja modelu języka do generowania odpowiedzi

1. **Dodaj model językowy**:
   - Przeciągnij model LLM (np. "ChatOpenAI", "Anthropic Claude")
   - Skonfiguruj model określając parametry jak:
     - Temperature (wpływa na kreatywność, niższa = bardziej deterministyczne odpowiedzi)
     - Max tokens (maksymalna długość odpowiedzi)
     - Dodatkowe instrukcje systemowe (system message)

2. **Dodaj komponent Retrieval QA Chain**:
   - Przeciągnij "Retrieval QA Chain" na obszar roboczy
   - Połącz wyjście bazy wektorowej do wejścia "Vector Store"
   - Połącz wyjście modelu języka do wejścia "LLM"
   - Skonfiguruj szablon promptu określający, jak model ma korzystać z odzyskanych kontekstów

## Krok 4: Dodanie interfejsu chatbota

1. **Dodaj komponent chatbota**:
   - Przeciągnij "Chatbot" na obszar roboczy
   - Połącz wyjście "Retrieval QA Chain" do wejścia "Chatbot"
   - Skonfiguruj opcje jak nazwa chatbota i komunikaty powitalne

## Krok 5: Testowanie i debugowanie

1. **Zapisz przepływ**:
   - Nadaj przepływowi opisową nazwę
   - Kliknij "Zapisz"

2. **Testuj przepływ**:
   - Przejdź do zakładki "Chatbot"
   - Zadaj pytanie związane z treścią twoich dokumentów
   - Obserwuj odpowiedź i oceniaj jej jakość

3. **Debugowanie**:
   - Jeśli odpowiedzi nie są satysfakcjonujące, wróć do edycji przepływu
   - Sprawdź logi i wartości pośrednie (debugMode)
   - Dostosuj parametry jak liczba odzyskiwanych dokumentów, chunk size lub instrukcje systemowe

## Wskazówki dla lepszych wyników

- **Prompty systemowe**: Dodaj szczegółowe instrukcje dla modelu LLM, np. "Odpowiadaj tylko na podstawie dostarczonych dokumentów. Jeśli nie znasz odpowiedzi, powiedz to szczerze."
- **Metadata**: Dodaj metadane do fragmentów dokumentów (jak tytuł źródłowy, data, autor), aby poprawić kontekst
- **Filtrowanie**: Użyj filtrów metadata, aby ograniczyć wyszukiwanie do konkretnych dokumentów
- **Łańcuch myślenia**: Skonfiguruj prompt tak, aby model "myślał na głos" przed udzieleniem ostatecznej odpowiedzi
          `
        },
        {
          id: "flowise-monitoring",
          title: "Monitorowanie",
          displayTitle: "Monitorowanie przepływów w Flowise AI",
          videoUrl: "https://example.com/videos/flowise-monitoring.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Monitorowanie przepływów w Flowise AI

W tej lekcji nauczysz się monitorować, debugować i optymalizować przepływy w Flowise AI. Skuteczne monitorowanie jest kluczowe dla zapewnienia niezawodności, identyfikowania problemów i optymalizacji kosztów.

## Podstawy monitorowania w Flowise

Flowise oferuje kilka wbudowanych narzędzi do monitorowania:

1. **Logi wykonania przepływu** - szczegółowa historia działań przepływu
2. **Debugowanie w czasie rzeczywistym** - śledzenie przepływu danych przez komponenty
3. **Metryki wydajności** - pomiar czasów odpowiedzi i wykorzystania zasobów
4. **Monitorowanie kosztów** - śledzenie wykorzystania tokenu i kosztów API

## Debugowanie przepływów

### Tryb debugowania

Aby włączyć tryb debugowania:

1. Otwórz swój przepływ w edytorze
2. Włącz opcję "Debug Mode" w prawym górnym rogu
3. Uruchom przepływ w trybie chatbota lub przez API

W trybie debugowania, Flowise pokazuje:
- Wartości pośrednie w każdym węźle
- Czasy wykonania każdego komponentu
- Pełne zapytania i odpowiedzi do/z modeli LLM
- Szczegółowe błędy i ostrzeżenia

## Quest: Monitorowanie i optymalizacja przepływu

Jako zadanie praktyczne, zoptymalizuj istniejący przepływ Flowise:

1. Włącz tryb debugowania i zidentyfikuj wąskie gardła w swoim przepływie
2. Analizuj wykorzystanie tokenów i zaimplementuj co najmniej dwie optymalizacje kosztów
3. Skonfiguruj alert dla długiego czasu odpowiedzi (powyżej 5 sekund)
4. Przeprowadź test obciążeniowy swojego przepływu i udokumentuj wyniki
5. Zaproponuj i wdróż ulepszenia oparte na wynikach monitorowania

Przedstaw raport dokumentujący stan przed i po optymalizacji, wraz z analizą wyników i uzasadnieniem wprowadzonych zmian.
          `
        },
        {
          id: "flowise-prompt-chain",
          title: "Prompt Chain",
          displayTitle: "Łańcuchy promptów w Flowise AI",
          videoUrl: "https://example.com/videos/flowise-prompt-chains.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Łańcuchy promptów w Flowise AI

W tej lekcji poznasz zaawansowaną technikę tworzenia łańcuchów promptów (Prompt Chains) w Flowise AI. Łańcuchy promptów pozwalają na tworzenie wieloetapowych procesów rozumowania, gdzie wynik jednego etapu staje się wejściem dla kolejnego.

## Czym są łańcuchy promptów?

Łańcuchy promptów to technika, która umożliwia modelom językowym rozwiązywanie złożonych problemów poprzez podzielenie ich na mniejsze, sekwencyjne kroki. Zamiast próbować uzyskać kompletną odpowiedź za jednym razem, model wykonuje serię powiązanych ze sobą zapytań i odpowiedzi.

## Korzyści z używania łańcuchów promptów

- **Lepsza jakość odpowiedzi** - model może skupić się na każdym kroku osobno
- **Większa kontrola nad procesem** - możesz wpływać na każdy etap rozumowania
- **Transparentność** - możesz śledzić, jak model dochodzi do końcowych wniosków
- **Redukcja błędów** - łatwiej wykryć i skorygować problemy w konkretnym kroku

## Implementacja łańcuchów promptów w Flowise

### Krok 1: Planowanie łańcucha

Przed rozpoczęciem pracy nad łańcuchem promptów, zaplanuj:
- Jakie są główne etapy rozumowania?
- Jakie informacje powinny być przekazywane między etapami?
- Jakie instrukcje potrzebuje model na każdym etapie?

### Krok 2: Tworzenie sekwencji komponentów

W Flowise możesz stworzyć łańcuch promptów na kilka sposobów:

1. **Używając komponentu SequentialChain**:
   - Dodaj komponent "Sequential Chain" do obszaru roboczego
   - Dla każdego kroku w sekwencji, dodaj komponent "LLM Chain"
   - Skonfiguruj każdy LLM Chain z odpowiednim szablonem promptu
   - Połącz LLM Chains z Sequential Chain, określając kolejność wykonania

2. **Łącząc komponenty bezpośrednio**:
   - Dodaj pierwszy komponent LLM lub Chat Model
   - Dodaj kolejny komponent, który będzie używał wyjścia pierwszego
   - Połącz wyjście pierwszego komponentu z odpowiednim wejściem drugiego
   - Kontynuuj dodawanie kolejnych etapów w łańcuchu

### Krok 3: Projektowanie promptów dla każdego etapu

Każdy etap w łańcuchu wymaga starannie zaprojektowanego promptu:

1. **Etap początkowy**: Prompt powinien jasno określać zadanie i format oczekiwanego wyniku, np.:
   \`\`\`
   Twoim zadaniem jest analiza poniższego tekstu i wyodrębnienie kluczowych faktów.
   Tekst: {{$input}}
   Wypisz tylko fakty, każdy w nowej linii, bez dodatkowych komentarzy.
   \`\`\`

2. **Etapy pośrednie**: Prompty powinny odnosić się do wyniku poprzedniego etapu i określać kolejne kroki, np.:
           \`\`\`

## Przykłady zastosowań łańcuchów promptów

Łańcuchy promptów są szczególnie przydatne w następujących scenariuszach:

1. **Złożone rozumowanie** - np. rozwiązywanie problemów matematycznych krok po kroku
2. **Generowanie wieloetapowych treści** - np. tworzenie artykułu przez outline, szkic i ostateczną wersję
3. **Analiza i synteza informacji** - np. analiza dokumentu, wyodrębnienie kluczowych punktów, a następnie stworzenie podsumowania
4. **Weryfikacja własnych odpowiedzi** - np. wygenerowanie odpowiedzi, a następnie jej sprawdzenie i korekta

## Quest: Implementacja łańcucha promptów dla analizy tekstu

Jako zadanie praktyczne, stwórz łańcuch promptów w Flowise AI do zaawansowanej analizy tekstu:

1. Pierwszy etap: Ekstrakcja kluczowych tematów i pojęć z tekstu wejściowego
2. Drugi etap: Analiza relacji między wyodrębnionymi tematami
3. Trzeci etap: Identyfikacja luk informacyjnych i potencjalnych nieścisłości
4. Czwarty etap: Generowanie pogłębionej analizy z odniesieniami do oryginalnego tekstu

Zaimplementuj ten łańcuch w Flowise, przetestuj go na przykładowym tekście i udokumentuj wyniki każdego kroku. Eksperymentuj z różnymi instrukcjami dla każdego etapu, aby zobaczyć jak wpływają na jakość końcowej analizy.
          `
        },
        {
          id: "flowise-external-api",
          title: "Zewnętrzne API",
          displayTitle: "Integracja z zewnętrznymi API w Flowise",
          videoUrl: "https://example.com/videos/flowise-external-api.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Integracja z zewnętrznymi API w Flowise

W tej lekcji nauczysz się, jak integrować przepływy Flowise z zewnętrznymi API, co znacząco rozszerza możliwości twoich aplikacji AI. Dzięki integracji z API, twoje chatboty i asystenci mogą uzyskiwać dostęp do aktualnych danych, wykonywać operacje w zewnętrznych systemach i łączyć możliwości AI z istniejącymi serwisami.

## Dlaczego warto integrować z zewnętrznymi API?

Integracja z API pozwala na:
- Dostęp do aktualnych informacji (pogoda, kursy walut, wiadomości)
- Wykonywanie operacji w zewnętrznych systemach (tworzenie zamówień, rezerwacji)
- Pobieranie danych z baz danych i systemów biznesowych
- Łączenie możliwości różnych usług w jednym rozwiązaniu

## Metody integracji z API w Flowise

Flowise oferuje kilka sposobów integracji z zewnętrznymi API:

### 1. Komponent API Tool

Najłatwiejszym sposobem jest użycie komponentu "API Tool":

1. Dodaj komponent "API Tool" do obszaru roboczego
2. Skonfiguruj parametry:
   - URL endpointu
   - Metoda HTTP (GET, POST, PUT, DELETE)
   - Nagłówki (headers) z uwierzytelnianiem
   - Parametry zapytania lub ciało (body)
3. Połącz komponent API Tool z modelem językowym za pomocą komponentu "Agent"

### 2. Custom Tool

Dla bardziej złożonych integracji możesz stworzyć własne narzędzie:

1. Dodaj komponent "Custom Tool" do obszaru roboczego
2. Zdefiniuj kod narzędzia używając JavaScript, np.:
   \`\`\`javascript
   const axios = require('axios');
   
   async function fetchWeather(location) {
     const API_KEY = 'your_api_key';
     const response = await axios.get(
       'https://api.weatherapi.com/v1/current.json?key=' + API_KEY + '&q=' + location
     );
     return JSON.stringify(response.data.current);
   }
   
   module.exports = fetchWeather;
   \`\`\`
3. Skonfiguruj opis narzędzia, aby model wiedział, kiedy go używać
4. Połącz Custom Tool z agentem

### 3. Webhook

Możesz również utworzyć webhook, aby odbierać dane z zewnętrznych systemów:

1. Wdróż swój przepływ jako API
2. Skonfiguruj endpoint, który będzie odbierał żądania
3. Przetwarzaj przychodzące dane w przepływie

## Praktyczne przykłady integracji API

### Integracja z API pogodowym

1. Dodaj komponent "API Tool" i skonfiguruj go do połączenia z API pogodowym
2. Skonfiguruj prompt modelu, aby wiedział, kiedy zapytać o pogodę:
   \`\`\`
   Jeśli użytkownik pyta o pogodę, użyj API Tool, aby uzyskać aktualne informacje pogodowe.
   Lokalizacja powinna być wyodrębniona z zapytania użytkownika.
   \`\`\`

### Integracja z API wiadomości

1. Skonfiguruj komponent API do łączenia się z serwisem wiadomości
2. Użyj promptu, który zachęca model do aktualizowania informacji:
   \`\`\`
   Kiedy użytkownik prosi o aktualne wiadomości, użyj API Tool, aby pobrać najnowsze nagłówki.
   Podsumuj wiadomości w zwięzły sposób.
   \`\`\`

## Najlepsze praktyki integracji API

1. **Obsługa błędów** - Zawsze implementuj obsługę błędów, aby twój przepływ był odporny na awarie API
2. **Uwierzytelnianie** - Bezpiecznie przechowuj klucze API i tokeny uwierzytelniające
3. **Rate limiting** - Uwzględniaj ograniczenia API i implementuj mechanizmy opóźniające
4. **Formaty danych** - Upewnij się, że model rozumie format danych zwracanych przez API
5. **Testowanie** - Regularnie testuj integracje, aby upewnić się, że działają prawidłowo

## Quest: Integracja z zewnętrznym API

Jako zadanie praktyczne, zaimplementuj asystenta z integracją z zewnętrznym API:

1. Wybierz publiczne API (np. API pogodowe, walutowe, wiadomości)
2. Stwórz przepływ w Flowise, który:
   - Analizuje pytania użytkownika
   - Identyfikuje potrzebę pobrania danych z API
   - Formułuje odpowiednie zapytanie API
   - Interpretuje i prezentuje wyniki w przyjazny sposób
3. Dodaj obsługę błędów i przypadków brzegowych
4. Udokumentuj proces integracji i potencjalne problemy
5. Porównaj odpowiedzi asystenta z integracją API z odpowiedziami, które opierają się tylko na wiedzy modelu

Przedstaw wyniki zadania w formie raportu z przykładami interakcji, zrzutami ekranu przepływu oraz analizą skuteczności integracji.
          `
        },
        {
          id: "flowise-vector-database",
          title: "Baza wektorowa",
          displayTitle: "Bazy wektorowe w Flowise AI",
          videoUrl: "https://example.com/videos/flowise-vector-db.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Bazy wektorowe w Flowise AI

W tej lekcji zagłębimy się w temat baz wektorowych (vector databases), które są fundamentalnym elementem aplikacji opartych na Retrieval Augmented Generation (RAG). Zrozumienie i efektywne wykorzystanie baz wektorowych jest kluczowe dla tworzenia zaawansowanych aplikacji AI z własną bazą wiedzy.

## Czym są bazy wektorowe?

Bazy wektorowe to specjalizowane bazy danych zaprojektowane do przechowywania i efektywnego przeszukiwania wektorów (embeddings) - wielowymiarowych reprezentacji liczbowych tekstu, obrazów lub innych danych. W kontekście Flowise AI, bazy wektorowe pozwalają na:

- Przechowywanie reprezentacji wektorowych dokumentów
- Szybkie wyszukiwanie podobnych dokumentów
- Odnajdowanie informacji semantycznie zbliżonych do zapytania użytkownika

## Popularne bazy wektorowe w Flowise

Flowise AI integruje się z wieloma bazami wektorowymi:

1. **FAISS** - biblioteka open-source od Facebooka, wydajna dla dużych zbiorów danych
2. **Chroma** - prosta, łatwa w użyciu baza wektorowa dla projektów RAG
3. **Pinecone** - zarządzana usługa bazy wektorowej w chmurze
4. **Milvus** - rozproszona baza wektorowa o wysokiej wydajności
5. **Qdrant** - baza wektorowa skupiająca się na filtracji metadanych
6. **Weaviate** - baza wektorowa z możliwością strukturyzacji i kategoryzacji danych

## Tworzenie bazy wektorowej w Flowise

### Krok 1: Przygotowanie dokumentów

Podobnie jak w lekcji o pierwszym przepływie, zaczynamy od przygotowania dokumentów:
1. Dodaj komponent ładowania dokumentów
2. Dodaj komponent dzielenia tekstu na fragmenty (chunks)

### Krok 2: Generowanie embeddingów

1. Wybierz model embeddingów (np. OpenAI Embeddings, HuggingFace Embeddings)
2. Skonfiguruj komponent embeddingów z odpowiednimi parametrami i kluczami API

### Krok 3: Konfiguracja bazy wektorowej

1. Dodaj komponent wybranej bazy wektorowej (np. "FAISS Vector Store")
2. Połącz wyjście Text Splitter i Embeddings z wejściami bazy wektorowej
3. Skonfiguruj parametry specyficzne dla wybranej bazy:
   - Dla FAISS: format zapisu, ścieżka do pliku
   - Dla Chroma: katalog przechowywania, kolekcja
   - Dla usług chmurowych: klucze API, nazwy indeksów

### Krok 4: Implementacja wyszukiwania

1. Dodaj komponent wyszukiwania (np. "Vector Store Retriever")
2. Połącz bazę wektorową z komponentem wyszukiwania
3. Skonfiguruj parametry wyszukiwania:
   - k - liczba najbardziej podobnych dokumentów do pobrania
   - Próg podobieństwa (score threshold) - minimalny poziom podobieństwa
   - Filtry metadanych - jeśli chcesz ograniczyć wyszukiwanie

## Zaawansowane techniki pracy z bazami wektorowymi

### Przechowywanie i aktualizacja

Flowise pozwala na:
- Zapisywanie baz wektorowych na dysku
- Ładowanie istniejących baz
- Aktualizację baz nowymi dokumentami

Przykładowa konfiguracja dla FAISS:
- Ustaw "Save to disk" na true
- Określ ścieżkę do katalogu przechowywania
- Użyj opcji "From Existing" aby załadować istniejącą bazę

### Filtry metadanych

Możesz wzbogacić fragmenty dokumentów o metadane i używać ich do filtrowania wyników:
1. Dodaj metadane podczas ładowania dokumentów (np. autor, data, kategoria)
2. Skonfiguruj filtry w komponentach wyszukiwania:
   \`\`\`javascript
   {
     "metadata": {
       "category": "finanse",
       "date": { "$gte": "2023-01-01" }
     }
   }
   \`\`\`

### Hybrydowe wyszukiwanie

Łączenie wyszukiwania wektorowego z wyszukiwaniem pełnotekstowym:
1. Skonfiguruj komponent "Hybrid Search"
2. Połącz go zarówno z bazą wektorową jak i indeksem pełnotekstowym
3. Ustaw wagi dla obu rodzajów wyszukiwania

## Optymalizacja baz wektorowych

### Wybór odpowiedniej bazy

- **FAISS** - optymalna dla dużych zbiorów danych offline
- **Chroma** - dobra dla małych i średnich projektów
- **Pinecone/Weaviate** - idealne dla zastosowań produkcyjnych wymagających skalowalności

### Optymalizacja parametrów

- **Rozmiar chunków** - wpływa na granularność wyszukiwania (mniejsze chunks = większa precyzja, ale więcej szumu)
- **Liczba wymiarów embeddingów** - balans między dokładnością a wydajnością
- **Algorytm indeksowania** - różne bazy oferują różne algorytmy

### Monitorowanie wydajności

Śledź metryki jak:
- Czas wyszukiwania
- Trafność wyników (relevance)
- Zużycie pamięci i dysku
          `
        },
        {
          id: "flowise-agents",
          title: "Agenci",
          displayTitle: "Agenci AI w Flowise",
          videoUrl: "https://example.com/videos/flowise-agents.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Agenci AI w Flowise

W tej lekcji poznasz koncepcję agentów AI w Flowise, która pozwala na tworzenie autonomicznych systemów AI zdolnych do planowania, rozumowania i używania narzędzi. Agenci reprezentują najbardziej zaawansowany sposób wykorzystania modeli językowych w Flowise.

## Czym są agenci AI?

Agenci AI to zaawansowane systemy oparte na modelach językowych, które mogą:
- Samodzielnie planować działania potrzebne do osiągnięcia celu
- Wybierać i używać odpowiednich narzędzi
- Oceniać wyniki swoich działań i dostosowywać strategię
- Prowadzić złożone rozumowanie wieloetapowe

W Flowise agent jest konstrukcją łączącą model językowy z zestawem narzędzi oraz strategią ich wykorzystania.

## Komponenty agenta w Flowise

### 1. Model Językowy (LLM)

Agent wymaga modelu językowego o wysokich zdolnościach rozumowania:
- ChatGPT (GPT-3.5/GPT-4)
- Claude
- Llama 2
- Mistral
- Gemini

### 2. Narzędzia (Tools)

Agent może korzystać z różnych narzędzi:
- **Narzędzia wyszukiwania** - Vector Stores, Search APIs
- **Narzędzia obliczeniowe** - kalkulator, parser matematyczny
- **Narzędzia API** - integracje z zewnętrznymi usługami
- **Narzędzia niestandardowe** - własne funkcje JavaScript/Python

### 3. Strategia Agenta

Flowise oferuje różne strategie działania agenta:
- **REACT** (Reasoning and Acting) - najpopularniejsza strategia oparta na cyklu Obserwacja-Myślenie-Działanie
- **Plan and Execute** - agent najpierw tworzy plan, a potem go realizuje
- **OpenAI Functions** - dedykowana dla modeli OpenAI wspierających funkcje
- **ZERO-SHOT-REACT** - prostsza wersja REACT, nie wymagająca przykładów

## Tworzenie agenta w Flowise

### Krok 1: Przygotowanie modelu języka

1. Dodaj komponent modelu języka (np. ChatOpenAI)
2. Skonfiguruj z odpowiednim kluczem API i modelem
3. Ustaw wysoki limit tokenów, ponieważ agenci potrzebują dużego kontekstu

### Krok 2: Dodanie narzędzi

1. Dodaj komponenty narzędzi, które agent będzie wykorzystywał:
   - Search Tool
   - Calculator Tool
   - Weather API Tool
   - Vector Store Retriever
2. Skonfiguruj każde narzędzie z odpowiednimi parametrami

### Krok 3: Konfiguracja agenta

1. Dodaj komponent "Agent":
   - Połącz model języka do wejścia "LLM"
   - Połącz narzędzia do wejścia "Tools"
2. Wybierz strategię agenta (np. REACT)
3. Skonfiguruj dodatkowe parametry:
   - System Message - instrukcje dla agenta
   - Maksymalna liczba iteracji
   - Verbose - szczegółowe logi działania

### Krok 4: Dodanie interfejsu

1. Połącz wyjście agenta z komponentem "Chatbot"
2. Skonfiguruj interfejs chatbota

## Zaawansowane techniki dla agentów

### Pamięć agenta

Aby agent pamiętał wcześniejsze interakcje:
1. Dodaj komponent pamięci (np. "Buffer Memory")
2. Połącz pamięć z agentem

### Planowanie hierarchiczne

Dla złożonych zadań możesz stworzyć hierarchię agentów:
1. Agent-supervisor planuje i deleguje zadania
2. Wyspecjalizowani agenci wykonują konkretne zadania
3. Supervisor zbiera i integruje wyniki

### Agenci współpracujący

Możesz stworzyć system wielu agentów współpracujących ze sobą:
1. Skonfiguruj oddzielne przepływy dla każdego agenta
2. Użyj komponentów API, aby agenci mogli się komunikować
3. Ustaw mechanizm koordynacji (np. broker wiadomości)

## Najlepsze praktyki dla agentów

1. **Jasne instrukcje** - precyzyjnie definiuj rolę i cel agenta w System Message
2. **Odpowiednie narzędzia** - dostarczaj tylko narzędzia istotne dla zadania
3. **Debugowanie** - używaj trybu verbose, aby śledzić proces rozumowania
4. **Limity iteracji** - ustaw rozsądny limit iteracji, aby uniknąć pętli
5. **Obsługa błędów** - implementuj mechanizmy obsługi błędów narzędzi

## Quest: Stworzenie zaawansowanego asystenta z agentami

Jako zadanie praktyczne, stwórz zaawansowany system asystenta używający agentów:

1. Zaprojektuj i zaimplementuj co najmniej trzech specjalistycznych agentów:
   - Agent analityczny do pracy z danymi
   - Agent badawczy do wyszukiwania informacji
   - Agent kreatywny do generowania treści

2. Stwórz agenta-koordynatora, który:
   - Analizuje zapytanie użytkownika
   - Decyduje, który specjalistyczny agent powinien zająć się zadaniem
   - Deleguje zadania i zbiera wyniki
   - Prezentuje użytkownikowi spójną odpowiedź

3. Przetestuj system na złożonych zapytaniach wymagających:
   - Wyszukiwania informacji
   - Analizy danych
   - Tworzenia raportów lub treści
   - Łączenia wyników z różnych źródeł

4. Udokumentuj:
   - Architekturę systemu (diagram)
   - Proces delegowania zadań
   - Przykłady rozwiązanych złożonych zapytań
   - Analizę mocnych i słabych stron systemu
          `
        },
        {
          id: "flowise-webhooks",
          title: "Webhooki",
          displayTitle: "Webhooki w Flowise AI",
          videoUrl: "https://example.com/videos/flowise-webhooks.mp4",
          thumbnailUrl: "/placeholder.svg",
          completed: false,
          description: `
# Webhooki w Flowise AI

W tej lekcji poznasz zaawansowaną funkcjonalność webhooków w Flowise AI. Webhooki pozwalają na integrację przepływów Flowise z zewnętrznymi systemami i aplikacjami, umożliwiając automatyzację procesów i tworzenie bardziej złożonych rozwiązań.

## Czym są webhooki?

Webhooki to mechanizm, który pozwala aplikacjom komunikować się ze sobą w czasie rzeczywistym poprzez HTTP callbacks:
- Aplikacja A (źródło) wysyła dane do zdefiniowanego URL aplikacji B (odbiorca) gdy nastąpi określone zdarzenie
- Aplikacja B przyjmuje te dane i przetwarza je według swoich potrzeb

W kontekście Flowise AI, webhooki działają na dwa sposoby:
1. **Webhooks przychodzące** - Flowise odbiera dane z zewnętrznych systemów
2. **Webhooks wychodzące** - Flowise wysyła dane do zewnętrznych systemów

## Webhooks przychodzące w Flowise

### Konfiguracja endpointu webhook

1. Wdróż swój przepływ jako API
2. W panelu "API" skonfiguruj endpoint:
   - Nazwa endpointu (np. "/webhook-receiver")
   - Typ: Webhook
   - Metoda HTTP: zazwyczaj POST
   - Opcjonalnie: zabezpieczenia (API key, Basic Auth)

### Przetwarzanie danych z webhooka

1. Dodaj komponent "API Webhook Input" do przepływu
2. Podłącz go do komponentów, które będą przetwarzać otrzymane dane:
   - Model językowy może analizować treść
   - Komponent niestandardowy może transformować dane
   - Komponent Vector Store może zapisywać dane do bazy wiedzy

### Przykłady zastosowań webhooków przychodzących

- Odbieranie powiadomień o nowych dokumentach do indeksowania
- Aktualizacja bazy wiedzy na podstawie zewnętrznych zdarzeń
- Integracja z systemami CRM, helpdesk, email
- Reagowanie na zdarzenia z systemów IoT

## Webhooks wychodzące w Flowise

### Konfiguracja komponentu Webhook Output

1. Dodaj komponent "Webhook" do przepływu
2. Skonfiguruj parametry:
   - URL docelowy
   - Metoda HTTP (zazwyczaj POST)
   - Nagłówki (w tym uwierzytelnianie)
   - Format danych wyjściowych (JSON)

### Integracja z przepływem

1. Podłącz wyjście poprzedniego komponentu (np. LLM) do komponentu Webhook
2. Skonfiguruj transformację danych, aby dopasować format oczekiwany przez system docelowy

### Przykłady zastosowań webhooków wychodzących

- Wysyłanie odpowiedzi AI do zewnętrznych systemów
- Powiadamianie o zakończonych zadaniach
- Uruchamianie automatyzacji w innych systemach
- Zapisywanie wyników analiz do zewnętrznych baz danych

## Zaawansowane scenariusze z webhookami

### Dwukierunkowa komunikacja z zewnętrznymi systemami

Możesz stworzyć przepływ, który:
1. Odbiera dane przez webhook przychodzący
2. Przetwarza te dane używając AI
3. Wysyła wyniki z powrotem do systemu źródłowego przez webhook wychodzący

### Synchronizacja bazy wiedzy

Możesz zautomatyzować aktualizację bazy wiedzy:
1. Webhook odbiera powiadomienie o nowym dokumencie
2. Przepływ pobiera dokument, przetwarza go i dzieli na fragmenty
3. Dokument zostaje dodany do bazy wektorowej
4. Webhook wychodzący wysyła potwierdzenie do systemu zarządzania dokumentami

### Integracja z platformami automatyzacji

Możesz połączyć Flowise z platformami automatyzacji:
1. Skonfiguruj webhook Flowise jako endpoint dla Zapier, Make.com lub Power Automate
2. Utwórz przepływ przetwarzający dane z tych platform
3. Wyniki analizy zwróć do platformy automatyzacji

## Najlepsze praktyki dla webhooków

1. **Zabezpieczanie webhooków** - zawsze używaj uwierzytelniania dla webhooków (API key, secret token)
2. **Walidacja danych** - weryfikuj format i poprawność danych przychodzących
3. **Obsługa błędów** - implementuj mechanizmy retry dla nieudanych wywołań
4. **Monitorowanie** - śledź aktywność webhooków i czas odpowiedzi
5. **Dokumentacja** - dokumentuj format danych i przykłady dla zespołów integrujących się z twoimi webhookami
6. **Idempotentność** - zapewnij, że wielokrotne przetworzenie tego samego webhooka nie powoduje duplikacji

## Implementacja zabezpieczeń webhooków

### Uwierzytelnianie poprzez sekretny token

1. Wygeneruj unikalny token
2. Skonfiguruj system wysyłający, aby dodawał nagłówek X-Webhook-Secret
3. W komponentach Flowise weryfikuj ten token przed przetwarzaniem danych

### Weryfikacja poprzez podpisy

Dla bardziej zaawansowanych zabezpieczeń:
1. System wysyłający tworzy podpis HMAC z treści
2. Flowise weryfikuje podpis, aby potwierdzić autentyczność danych

Przykładowy kod weryfikujący podpis:
\`\`\`javascript
const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
\`\`\`
          `
        }
      ]
    }
  ]
};
