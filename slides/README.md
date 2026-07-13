# Slides client — charte Plutonien

Présentations HTML autonomes (format paysage A4, export PDF via Chrome).

## Structure

```
slides/
  dc/                          # Délices Corner
    PRESENTATION-PLUTONIEN-DC.html
    assets/
  klesis/                      # Klesis Junior
    PRESENTATION-PLUTONIEN-KLESIS.html
    assets/
```

Chaque client a son dossier (`dc`, `klesis`, etc.) sur une branche dédiée si besoin.

## Prévisualiser

Ouvrir le `.html` dans un navigateur, ou :

```bash
open slides/dc/PRESENTATION-PLUTONIEN-DC.html
open slides/klesis/PRESENTATION-PLUTONIEN-KLESIS.html
```

## Exporter en PDF

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="slides/dc/PRESENTATION-PLUTONIEN-DC.pdf" \
  "file://$(pwd)/slides/dc/PRESENTATION-PLUTONIEN-DC.html"

# Klesis Junior
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="slides/klesis/PRESENTATION-PLUTONIEN-KLESIS.pdf" \
  "file://$(pwd)/slides/klesis/PRESENTATION-PLUTONIEN-KLESIS.html"
```
