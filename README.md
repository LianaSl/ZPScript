# ImgPreviewer — Vyhledávač obrázků

Webová aplikace pro vyhledávání a prohlížení fotografií v reálném čase pomocí **Pixabay API**.

---

## 🛠 Technologie

- **HTML5** — struktura stránky
- **CSS3** — styly, animace, responzivní design
- **JavaScript (ES6+)** — logika, fetch, modální okno, paginace
- **Vite** — vývojový server a sestavení projektu
- **Pixabay API** — zdroj fotografií

---

## 📁 Struktura projektu

```
imgpreviewer/
├── src/
│   ├── api.js       # Komunikace s Pixabay API, paginace, události
│   ├── ui.js        # Renderování karet, modální okno
│   ├── main.js      # Vstupní bod aplikace
│   └── style.css    # Globální styly
├── index.html       # Hlavní HTML soubor
└── package.json
```

---

## ⚙️ Jak aplikace funguje

1. Uživatel zadá hledaný výraz do pole a klikne na **Hledat**
2. Aplikace odešle požadavek na Pixabay API pomocí `fetch`
3. Výsledky se zobrazí jako karty s fotografiemi
4. Kliknutím na fotografii se otevře **modální okno** s detailem
5. Pomocí tlačítek **Předchozí / Další** lze listovat mezi stránkami
6. Tlačítkem **← Hlavní** se vrátíte zpět na hlavní stránku portfolia

---

## 📄 Moduly

### `api.js`
- Inicializace aplikace
- Komunikace s Pixabay API
- Správa stavu (aktuální stránka, celkový počet stránek)
- Obsluha událostí: `submit`, `click`, `keydown`

### `ui.js`
- Renderování karet s obrázky
- Vytváření modálního okna s detailem fotografie
- Zobrazení autora, tagů, počtu lajků a stažení

---

## 🔌 API

Aplikace používá [Pixabay API](https://pixabay.com/api/docs/).

- **Endpoint:** `https://pixabay.com/api/`
- **Parametry:** `key`, `q` (dotaz), `page`, `per_page`, `image_type`
- **Počet výsledků na stránku:** 9

---

## 🚀 Spuštění projektu

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Sestavení pro produkci
npm run build
```

---

## 👩‍💻 Autorka

**Liana Šljonkina**  
📧 [sljonkina@gmail.com](mailto:sljonkina@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/liana-šljonkina/)  
🐙 [GitHub](https://github.com/LianaSl)