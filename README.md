# 🦊 Kompleksowy poradnik obsługi Git w projekcie RudaStrona

Ten poradnik przeprowadzi Cię przez najważniejsze komendy i dobre praktyki pracy z Gitem w zespole – od klonowania repozytorium, przez codzienną pracę, aż po rozwiązywanie konfliktów.

---

## 📥 Klonowanie repozytorium

Jeśli jeszcze nie masz repozytorium na swoim komputerze:

```bash
git clone https://github.com/nazwa-uzytkownika/RudaStrona.git
cd RudaStrona
code .
```

---

## 🏗️ Tworzenie i przełączanie gałęzi

**Tworzenie nowej gałęzi:**

```bash
git checkout -b nazwa-galezi
```
*(np. git checkout -b dodaj-stopke)*

**Przełączanie się na istniejącą gałąź:**

```bash
git checkout main
git checkout inna-galaz
```

---

## 💾 Dodawanie i zatwierdzanie zmian

**Sprawdź status zmian:**

```bash
git status
```

**Dodaj wszystkie zmienione pliki do commita:**

```bash
git add .
```

**Dodaj wybrany plik:**

```bash
git add sciezka/do/pliku
```

**Zatwierdź zmiany z opisem:**

```bash
git commit -m "Krótki opis zmian"
```

---

## ⬆️ Wysyłanie zmian na zdalne repozytorium (push)

**Wyślij swoją gałąź na GitHub:**

```bash
git push origin nazwa-galezi
```

---

## ⬇️ Pobieranie zmian z repozytorium (pull)

**Pobierz najnowsze zmiany z głównej gałęzi:**

```bash
git checkout main
git pull origin main
```

**Pobierz zmiany do swojej gałęzi (jeśli jesteś na niej):**

```bash
git pull origin main
```
*(przyda się przed mergem lub dalszą pracą)*

---

## 🔀 Scalanie gałęzi (merge)

**Scal zmiany z main do swojej gałęzi:**

```bash
git checkout twoja-galaz
git merge main
```

**Scal swoją gałąź do main (po akceptacji PR lub lokalnie):**

```bash
git checkout main
git merge twoja-galaz
git push origin main
```

---

## ⚔️ Rozwiązywanie konfliktów

1. Po komendzie `merge` Git poinformuje o konfliktach.
2. Otwórz pliki z konfliktami w VS Code – będą oznaczone specjalnymi znacznikami.
3. Wybierz odpowiednie fragmenty kodu, usuń znaczniki konfliktu.
4. Po poprawkach:

```bash
git add .
git commit -m "Rozwiązano konflikty"
```

---

## 🗑️ Wycofywanie zmian

**Wycofaj zmiany w pliku (przed add):**

```bash
git checkout -- sciezka/do/pliku
```

**Wycofaj ostatni commit (zachowując zmiany w plikach):**

```bash
git reset --soft HEAD~1
```

---

## 🧹 Usuwanie gałęzi

**Lokalnie:**

```bash
git branch -d nazwa-galezi
```

**Na GitHubie:**

```bash
git push origin --delete nazwa-galezi
```

---

## 💡 Dobre praktyki

- Pracuj zawsze na osobnych gałęziach (nie na main!)
- Commituj często, z czytelnymi opisami
- Przed rozpoczęciem pracy zawsze `git pull`
- Przed scaleniem gałęzi zaktualizuj ją o zmiany z main (`git merge main`)
- Rozwiązuj konflikty od razu
- Usuwaj niepotrzebne gałęzie

---

## 📚 Przydatne komendy

- **Lista gałęzi:**  
  `git branch`
- **Historia commitów:**  
  `git log --oneline --graph --all`
- **Podgląd zmian:**  
  `git diff`
- **Podgląd zmian w pliku:**  
  `git diff sciezka/do/pliku`
