# myDevices Design System

**Any sensor. Any machine. Any AI.**

myDevices is an operational intelligence platform. It connects sensors, machines and building
systems (LoRaWAN and beyond), enriches and baselines the data, and then delivers finished
outcomes — dashboards, BI reports, ISO 50001 compliance documents, alerts, plain-language
answers — automatically, inside the AI the customer already uses (Claude, ChatGPT, Copilot,
Gemini, or their own agents) over MCP.

The design brief the whole system serves: **the design should always be proving something.**
Live badges, page counters, real tables, real filenames, real numbers with citations — never
decoration standing in for evidence.

---

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The single entry point consumers link. Nothing but `@import`s. |
| `tokens/` | `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`, `report.css`, `shape.css`, `motion.css`, `base.css`. |
| `components/` | React primitives in five groups + `components.css` (hover/press states). |
| `ui_kits/marketing-site/` | Interactive recreation of the myDevices homepage. Start at `index.html`. |
| `slides/` | Three sample slides from the generated management-review deck. |
| `templates/marketing-page/` | Starting template: header → hero → logo bar → use-case grid → navy stat band → CTA → footer, with placeholder copy in brand voice. |
| `guidelines/` | 25 foundation specimen cards (Colors, Type, Shape, Spacing, Motion, Brand). |
| `assets/` | `logo/` (official logotype, 3 tones), `fonts/`, `ai/` (assistant marks), `logos-customers/`, `artifacts/` (real generated deliverables). |
| `source/` | The unpacked original design bundle. |
| `SKILL.md` | Agent Skills front-matter so this folder works in Claude Code. |

### Components
Core — `Button`, `Eyebrow`, `Headline`, `LiveBadge`, `Pill`, `SourceNote`, `StatFigure`, `Placeholder`
Layout — `Section`, `Card`, `PullQuote`, `Byline`
Brand — `Logo`, `Wordmark`
Marketing — `SiteHeader`, `SiteFooter`, `LogoBar`, `AiChipRow`, `VerticalCard`, `TestimonialCard`, `VideoTestimonial`, `CtaSection`
In-AI — `ChatPanel`, `ChatMessage`, `ArtifactCard`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (when/how to use).

---

## CONTENT FUNDAMENTALS

**Voice: confident, plain-spoken, engineering-grade — a spec sheet that talks like a founder.**

- **Structure every headline as contrarian setup → outcome payoff.** Line 1 in charcoal states the old reality; line 2 in blue delivers what happens now. Both are short declarative sentences and **both end with a period**.
- **Casing.** Headlines ALL CAPS (via CSS — author in sentence case). Eyebrows, labels, captions and metadata uppercase mono. Body sentence case. Card titles uppercase.
- **Person.** Second person, always: "your machines", "the AI you already use", "your operations". First person plural only for the promise we make. Never "I".
- **Verbs the brand uses:** connects, turns, structures, baselines, flags, ranks, arrives, shows up, just works. **Verbs it avoids:** empowers, unlocks, revolutionises, transforms, leverages.
- **Banned:** "AI-powered", "cutting-edge", "seamless", "next-generation", "game-changing", "Learn more →", exclamation marks, emoji.
- **Link copy names the outcome, never the destination.**
- **Numbers must be specific and sourced**, with a mono citation.
- **Honest placeholders.** When an asset is missing, say so in mono. Never stock imagery, never a fabricated logo, never lorem ipsum.

---

## VISUAL FOUNDATIONS

### Colour
- **Light, technical-industrial.** White `#FFFFFF` pages, `#F7F7F7` alternating bands, pale blue-grey tints (`#F3F9FE`, `#E8F4FC`) for callouts and badges.
- **Exactly one deep navy section per page** (`#0B2436`). On navy, accent becomes `#56B0EA`; body text `#B9C7D4`.
- **One accent, no exceptions:** blue `#0D83D0` for every CTA, link, emphasis span, quote rule, insight border, active state. Hover/pressed is `#0A6AA8`.
- **Green `#1BB98A`** reserved for live/working/generated status only.
- **Category hues** (`--md-cat-*`) appear only as the 3px top-rule of a use-case card.
- **No gradients on text.** Only two very soft radial washes (`--wash-hero`, `--wash-cta`) plus the placeholder hatch.
- **Report exception:** generated deliverables (`tokens/report.css`) may use green/amber/red semantically.

### Type
Three fonts, no more. **League Spartan 800** ALL CAPS for headlines; 700 for card titles/buttons/names; 600 for nav. **Lato** 400 for prose, 700 for inline emphasis, 900 only for AI assistant names in chips. **JetBrains Mono** uppercase, wide tracking, for eyebrows/labels/captions — never prose.

### Layout & spacing
Airy and centred. 28px gutters; 96px section padding (88px hero, 100px navy, 104px closing CTA, 30px thin bands). Measures: 1200px header, 1160px footer/logo bar, 1080px standard, 1000px hero/navy, 820px closing CTA. Grids 3-up or 2-up, 16px gap; feature splits 56px gap. One fixed element: 76px sticky header (blurred).

### Shape, borders, shadows
Cards: 12/14/16px radii, `1px solid #E6E8EB` on white. Buttons 11px/9px. Chips/badges/counters full pills. 3px category top-rule; 3px blue left rule on quotes/callouts. **Shadows are blue-tinted glows, never grey/black**, mostly hover-only.

### Imagery
Real screenshots of real deliverables, real customer logos at 82% opacity, real AI assistant marks. No filters, no grain, no illustration, no 3D. Missing photos get an honest hatch/dashed placeholder.

### Motion & states
`0.16s ease` on every transition. Hover: buttons darken + lift + glow; cards gain glow; links shift blue. Press: colour only. Disabled: 42% opacity. Arrival animations `mdrise`/`mdfade`; `mdpulse` for live status. Nothing loops for decoration.

---

## ICONOGRAPHY

No icon font, sprite sheet, or icon library. The logotype is SVG (`assets/logo/`); AI assistant and customer marks are PNG (`assets/ai/`, `assets/logos-customers/`). Hand-authored inline SVG in exactly one place: the four footer social glyphs in `SiteFooter.jsx`. Unicode does the rest: `→` on CTAs, `↑` composer send, `✓` done/generated, `▢` placeholder, `›` bullets, `▲` metric up, `“` oversized quote glyph, `·` separator. File-type badges are typographic (`DOC`/`PPT`/`XLS`). No emoji. If a UI icon set is ever needed, use Lucide at 1.5px stroke.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>const { Section, Eyebrow, Headline, Button } = window.MyDevicesDesignSystem_4334d1;</script>
```

Reach for `ui_kits/marketing-site/` for page-level structure, `slides/` for deliverable-style layouts, and the `.prompt.md` next to any component for its rules.

In a real codebase (Claude Code Web etc.), skip `_ds_bundle.js` (a Cowork-runtime artifact) — import the `.jsx` components under `components/` directly and wire tokens via `styles.css` or your own CSS pipeline.
