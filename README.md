# MailFormPro

## Opis projektu
MailFormPro to aplikacja umożliwiająca developerom obsługę prostych formularzy kontaktowych na stronach internetowych, bez konieczności znajomości PHP. Aplikacja zapewnia prosty interfejs administracyjny do zarządzania formularzami i generowania kluczy dostępu dla projektów developerskich.

## Technologie
- Frontend: React
- Backend: Nest.js
- Baza danych: 

## Lista Zadań do Realizacji

- [x] **Utworzenie Repozytorium**: Stwórz repozytorium projektu na platformie do kontrolowania wersji (np. GitHub).

- [x] **Inicjalizacja Projektu**: Skonfiguruj strukturę projektu, włączając w to katalogi dla frontendu i backendu.

### Backend (Nest.js, TypeScript, TypeORM)

#### Moduły:

- [ ] **Auth Module**
  - [ ] Implementacja kontrolera rejestracji i logowania.
  - [ ] Integracja z Token Module do obsługi tokenów.

- [ ] **Token Module**
  - [ ] Implementacja kontrolera do zarządzania tokenami.
    - [ ] Implementacja funkcji do generowania, usuwania i weryfikowania tokenów.

- [ ] **Form Module**
  - [ ] Implementacja kontrolera do tworzenia, pobierania i edycji formularzy.

- [ ] **Mail Module**
  - [ ] Implementacja kontrolera do konfiguracji maili.
  - [ ] Integracja z biblioteką lub usługą do wysyłania maili.

- [ ] **Template Module**
  - [ ] Implementacja kontrolera do zarządzania wzorami maili.
    - [ ] Utworzenie nowego wzoru maila.
    - [ ] Pobranie istniejącego wzoru maila.
    - [ ] Edycja istniejącego wzoru maila.
    - [ ] Usunięcie wzoru maila.
    - [ ] Przeglądanie wszystkich wzorów maili.

#### Konfiguracja Bazy Danych:

- [ ] Skonfigurowanie połączenia z bazą danych w pliku konfiguracyjnym.
- [ ] Skonfigurowanie relacji między modelami (np. formularz ma wiele pól).
- [ ] Definicja modeli dla formularzy, pól, konfiguracji maili oraz wzoru maila.

#### Bezpieczeństwo:

- [ ] Implementacja mechanizmów autentykacji i autoryzacji.
- [ ] Zabezpieczenie tokenów dostępu.

### Frontend (React)

- [ ] **Rejestracja i Logowanie**:
  - [ ] Implementacja formularzy rejestracji i logowania.
- [ ] **Panel administracyjny:**
  - [ ] Przycisk do utworzenia nowego formularza.
  - [ ] Przeglądanie obecnych formularzy.
    - [ ] Przeglądanie ilości maili przesłanych przez dany formularz.
    - [ ] Edycja i usunięcie danego formularza
  - [ ] Interfejs do generowania kluczy dostępu.
    - [ ] Generowanie nowego klucza oraz jego aktualizacja

- [ ] **Tworzenie Formularzy**:
  - [ ] Dodawanie adresu email na który ma zostać przesłany formularz.
  - [ ] Określenie jakie dane będą przekazywane przez formularz.
  - [ ] Skomponowanie wiadomości, która ma zostać wysłana wraz z danymi z formularza.
  - [ ] Zapisanie formularza i wyświetlenie przykładowego kodu, który musi zostać dodany do strony w metody `onSubmit`.

### Dodatkowe Funkcjonalności (Opcjonalne)

- [ ] **Załączniki**:
  - [ ] Dodanie obsługi załączników do formularzy.

---
## Autor
- Przemysław Wojciechowski
- Email: [przemyslaw.r.wojciechowski@gmail.com](mailto:przemyslaw.r.wojciechowski@gmail.com)
- GitHub: [github.com/przekol](https://github.com/przekol)


## Feedback i Pomysły

Jeśli zauważysz jakiekolwiek niespójności w projekcie lub masz pomysł na kolejną funkcjonalność, śmiało daj znać!

