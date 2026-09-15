# Sample slides — generated management-review deck

These recreate the three real slides visible in the source design's artifact preview
(`assets/artifacts/deck-slide-1..3.png`): the deck the platform generates and emails on a schedule.

| File | Slide type |
| --- | --- |
| `TitleSlide.jsx` / `.html` | Navy opener — mono kicker, blue eyebrow, two-line ALL-CAPS title, hairline rule, audit countdown. |
| `AtAGlanceSlide.jsx` / `.html` | Four-KPI strip over paired "Good news" / "Needs action" panels. |
| `PriorityActionSlide.jsx` / `.html` | One issue in depth: status tags, impact stat grid, root causes, owner/due/payback table. |

**Palette note.** Report slides are the one place the semantic report colours in
`tokens/report.css` (`--rp-good/warn/bad/info`) are allowed — data has to read as good or
bad. Marketing surfaces keep the single-accent rule. Slide geometry: 1280×720, 48–54px
margins, 3-4px radii (tighter than web cards, because Office renders them), mono footers
citing the data source on every slide.
