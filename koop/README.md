# PIPELINE4 · Vier-Ebenen-Pipeline

PIPELINE4 ist die vierte Achse des Systems.
Sie bildet den vollständigen Durchlauf von Eingang bis Ausgang.

## Struktur
PIPELINE4 nutzt vier Ebenen:

1. **Input-Vektor**  
   - IX aus 3.csv

2. **Funktionsachse**  
   - IO aus 6.csv

3. **Normmodul**  
   - FIT, FIX, MISS, RDY, ERROR, HELP aus 9.csv

4. **Output-Achse**  
   - OI aus 6.csv

## Zweck
PIPELINE4 erzeugt den vollständigen Durchlauf:
Input → Funktion → Norm → Output.

## Module
- [IX](ca://s?q=VEC_IX)
- [IO](ca://s?q=AX_IO)
- [OI](ca://s?q=AX_OI)
- [FIT](ca://s?q=NM_FIT)
- [FIX](ca://s?q=NM_FIX)
- [MISS](ca://s?q=NM_MISS)
- [RDY](ca://s?q=NM_RDY)
- [ERROR](ca://s?q=NM_ERROR)
- [HELP](ca://s?q=NM_HELP)

## Matrix
PIPELINE4 nutzt die 3-6-9-Matrix:
- 3 = Grundvektoren
- 6 = Funktionsachsen
- 9 = Normmodule

## Status
Aktiv, Output-fähig, NC-gestützt.
