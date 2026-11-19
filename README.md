# Reparationssedler

Digitale reparationssedler til værkstedet. Appen kører i browseren, kan lægges på startskærmen som en app og virker også uden internet. Alle sedler gemmes i Dropbox.

## Sådan virker det
- **Åben → Færdig → Tastet i Ordrestyring (arkiv).** En seddel kan kun meldes færdig, når kunde, model, serienr., dato, timer og fejl er udfyldt.
- Hver seddel får et løbenummer (R-0001, R-0002 …), så man kan se, hvis en mangler.
- Der er ingen slet-knap. Sedler kan kun arkiveres.
- Ved et serienummer, der har været inde før, vises en advarsel med de tidligere sedler.
- Man kan taste på telefonen eller skrive med pen på tabletten (S Pen / Apple Pencil). Begge dele kan bruges på samme seddel.

## Mapper i Dropbox
| Mappe | Indhold |
|---|---|
| `Færdige - ikke tastet/` | PDF af sedler, der mangler at blive tastet i Ordrestyring |
| `Arkiv/ÅÅÅÅ/` | PDF af sedler, der er tastet |
| `_data/` | Sedlernes data (bruges af appen – rør dem ikke) |
| `_system/` | Løbenummer-tæller og sikkerhedskopier ved samtidige rettelser |

## Opsætning (én gang)
1. **Dropbox-app** (dropbox.com/developers/apps): Scoped access, Full Dropbox, med rettighederne `files.content.write` og `files.content.read`.
   Under Settings → *OAuth 2 Redirect URIs* tilføjer du appens adresse, f.eks. `https://BRUGERNAVN.github.io/reparationsseddel/`.
2. **GitHub Pages**: Repository → Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
3. Åbn appen i Chrome/Safari og vælg ⚙ → *Log ind med Dropbox*. Tjek også mappen under *Avanceret*.
4. Læg den på startskærmen:
   - Android: ⋮ → *Installer app* / *Føj til startskærm*
   - iPad/iPhone: Del → *Føj til hjemmeskærm* (log ind i den installerede app med *Log ind med kode*)

App key og standardmappe står øverst i `index.html` (`DEFAULT_APP_KEY`, `DEFAULT_BASE`). Standardmappe: `/Victor/DanskDJTeknik/Reparationssedler`.
