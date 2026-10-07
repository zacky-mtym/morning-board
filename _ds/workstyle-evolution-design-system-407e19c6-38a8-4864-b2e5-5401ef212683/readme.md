# Workstyle Evolution — Design System

株式会社Workstyle Evolution (Workstyle Evolution Inc.) is a Japanese consultancy that helps companies
put generative AI and AI agents to work: hands-on training (ハンズオン研修), keynote talks and
conference appearances (講演・登壇), advisory engagements (生成AIアドバイザリー), and a public
"AI偏差値チェック" self-assessment. Founded 2020-10-01, based in 神奈川県緑区長津田, led by
代表取締役CEO 池田朋弘, who also publishes a long series of best-selling Japanese AI business books
(ChatGPT最強の仕事術, Gemini 最強のAI仕事術, Claude 最強のAI自動化術, …) and a YouTube channel.

Audience: Japanese enterprise decision-makers and the operational teams under them
(名古屋鉄道, 日本経済新聞社, アコム, ビッグローブ, NTTアドバンステクノロジ, メンバーズ …).

## Products / surfaces represented here

| Surface | Where |
| --- | --- |
| Corporate marketing site (the only public product) | `ui_kits/corporate-site/` |

There is one product: the corporate site. It is a Framer-built, Japanese-language marketing site with
a homepage, service/training pages, case studies, news + events, books, FAQ, company profile and a
contact form.

## Sources used

- **https://workstyle-evolution.co.jp/** — homepage (hero, service grid, case rail, books, news, company profile, FAQ, contact) and **https://workstyle-evolution.co.jp/hands-on** — training index. Read as rendered text.
- Brand imagery and the logo lockup were downloaded from the site's Framer CDN (`framerusercontent.com`) into `assets/`.
- No Figma file, no codebase, and no slide template were provided.

**Access caveat (important):** the site's stylesheet is not cross-origin readable, so exact CSS values —
font families, px paddings, radii, shadow values — could **not** be extracted. Colors in this system are
sampled pixel-accurately from the real logo lockup; the type scale, spacing, radii, shadows and motion
tokens are an informed reconstruction from the rendered design plus Japanese-web conventions.
Treat them as a proposal to correct, not as extracted ground truth.

The brief named the company "Akira Works"; every source provided resolves to 株式会社Workstyle Evolution,
so the system is built and named for Workstyle Evolution. Say the word if it should be re-badged.

---

## CONTENT FUNDAMENTALS

**Language.** Japanese first, throughout. English appears only as product nouns (ChatGPT, Gemini,
Claude Code, Copilot, AIエージェント) and the company name itself. Never translate UI labels to English.

**Register.** です・ます調 (polite-neutral), business-formal but warm. Never casual (だ・である is not used),
never stiff keigo beyond the normal お/ご prefixes. Clients are always addressed with 様 in listings
("名古屋鉄道様", "メンバーズ様") and with the full legal name in case studies ("名古屋鉄道株式会社").

**Person.** The company speaks as an unnamed "we" that is usually implicit — Japanese drops the subject.
The reader is addressed indirectly ("ご検討の方はこちら", "お気軽にお問合せください"), not as あなた.
First-person 私たち is rare.

**Headline pattern.** A noun phrase that ends in a value promise, often split over two lines:
"AIエージェント/生成AIの ビジネス活用支援なら". Body follows the pattern
*[method] を通じて、[outcome] を [verb]* — e.g. "研修、講演、導入支援を通じて、現場で使えるAI活用を定着させ、企業の業務効率化を伴走支援します。"

**Signature vocabulary.** 現場で使える · 実務直結 · 伴走支援 · 定着 · 業務効率化 · 実践型 · 最強の.
Two verbs carry the brand: 伴走 (running alongside the client) and 定着 (making it stick).

**Proof over adjectives.** Numbers do the selling: "約500時間の業務時間削減！", "数十社以上のAI活用促進を実現！".
The "！" is reserved for these result lines; ordinary sentences end in "。".

**Casing & punctuation.** No ALL-CAPS. Section titles are bare nouns with no punctuation
(サービス一覧 / サービス事例 / 出版書籍 / お知らせ / 会社概要 / よくあるご質問). FAQ questions end in "？".
Dates are `2026/09/08`. Events are bracketed: 【10/4(日) 開催】. Disclaimers start with "※".

**Button copy.** Short verb phrases, no period: 詳細はこちら · 詳細を見る · 事例を見る · 全て見る →
· まずは相談してみる · お問い合わせ. The arrow "→" is part of the label, not an icon.

**Emoji.** None. Never. Not in headings, buttons, cards or news items.

**Vibe.** Confident, practical, un-hyped. It sells competence and follow-through, not futurism —
even though every illustration is about AI.

---

## VISUAL FOUNDATIONS

**Color.** One blue family plus cool greys. Deep navy `#131f39` is the ink and the dark ground;
`#084690` is the primary action blue; `#43adff` is the bright accent that only appears in the logo,
gradients, small rules and highlights. Sky tints `#eaf4ff`/`#d6ecff` are the only "colored" backgrounds.
Greys are cool/blue-leaning (`#65748b`, `#dadee3`, `#f6f8fb`), never warm. There is no secondary hue —
no green, orange or purple in brand contexts; status colors exist for forms only.
Max two background tones per page: white and `--surface-subtle`, with `--surface-tint` for one hero band.

**Type.** Japanese gothic sans throughout; one family, weight does all the work (400 body, 700 everything
structural). Sizes: display 56, h1 40, h2 32, h3 24, h4 20, lead 18, body 16, small 14, caption 12.
Line-height is generously Japanese: **1.9 for body, never below 1.7**; headings 1.28–1.5.
Letter-spacing is near-zero except eyebrow labels (.08em). Dates and numerals use the mono face.
**Font substitution flagged:** the live site's faces could not be read, so this system specifies
**Noto Sans JP** (Google Fonts) for all text and **JetBrains Mono** for dates/tokens. The logo wordmark is
set in a squared techno display face that is *not* substituted — always use the logo asset, never retype it.

**Spacing & layout.** 4px base scale. Content lives in a 1160px max-width container with 24px gutters;
long-form blocks narrow to 800px. Sections are 96px tall vertically (64px compact) and alternate
white / `--surface-subtle`. Grids are 3-up for services, 4-up for cases and books, 6-up for the logo wall.
The header is the only fixed element (sticky, 72px, translucent white with 12px backdrop blur).

**Backgrounds.** Flat white or flat pale grey — no textures, no patterns, no noise. The one gradient in
regular use is the brand gradient (navy → #084690 → sky at 135°), reserved for the closing CTA band,
the 48px rule under section titles, and the footer edge. Hero bands use a very light
sky→white vertical wash. Full-bleed images appear only as page heroes on second-level pages, always
under a bottom-weighted navy scrim so white type clears 4.5:1.

**Imagery.** Two families, both unmistakably cool-blue: (1) high-key line-and-wash illustrations of
bright offices with people and friendly robots (`assets/hero-main.png`) and (2) soft-focus stock
photography washed toward cyan (`assets/hero-handson.png`, `assets/photo-copilot.jpg`).
Everything is light, low-contrast, optimistic, slightly desaturated except a glowing blue focal point.
Never warm, never dark, never gritty, no grain. Book covers are the exception — they are full-color
publisher artwork and are shown uncropped.

**Cards.** White, 16px radius, 1px `#dadee3` border, soft navy-tinted shadow (`0 2px 8px rgba(19,31,57,.07)`).
Border **and** shadow together — not one or the other. Images inside cards are 12px radius and clipped
by the card's own overflow. No colored left borders, ever.

**Shadows.** All navy-tinted, never neutral black: xs 1px/6%, sm 2–8px/7%, md 6–20px/9%, lg 16–40px/12%.
Primary buttons carry a blue shadow `0 10px 28px rgba(8,70,144,.22)`. Inner shadows are not used.

**Borders & radii.** Hairlines are 1px `--border-default`; list rows are separated by hairlines rather than
boxed. Radii: 8 inputs, 12 images, 16 cards, 24 large panels, pill (999px) for every button, badge and
filter chip. Nothing is square-cornered except full-bleed media.

**Motion.** Restrained. 200ms `cubic-bezier(.4,0,.2,1)` for state changes, 320–600ms ease-out for scroll
reveals (fade + 16px rise). No bounce, no spring, no parallax, no looping background animation.
The one repeating motion on the live site is the horizontal client-logo marquee.

**States.** Hover = 2px lift + shadow one step up + fill darkens toward navy (`--brand-primary-hover`);
links underline on hover. Press = `scale(.98)`, no color change beyond hover. Focus = 3px
`rgba(67,173,255,.45)` ring, never removed. Disabled = 40% opacity, no pointer events.

**Transparency & blur.** Exactly one use: the sticky header (`rgba(255,255,255,.88)` + `blur(12px)`).
Cards and modals are opaque. Scrims over photography use solid-to-transparent navy, not blur.

---

## ICONOGRAPHY

The source site is **almost icon-free** — this is a deliberate brand trait, not an omission.

- **No icon font, no sprite sheet, no Lucide/Heroicons/FontAwesome** was found in the source.
- The dominant "icon" is the **arrow →** used as a text glyph inside link and button labels
  ("事例一覧を見る →"). Reproduce it as a character, not an SVG.
- **"＞"** (full-width greater-than) separates breadcrumb items. **"▾"** marks the dropdown nav item.
  **"＋"** opens FAQ rows and rotates 45° to close. All are text characters.
- **Emoji are never used.**
- Meaning is carried by imagery (illustration/photography) and by client logos, not by icons.
- Client logos are third-party trademarks. They are **not** bundled here; `LogoWall`/`CaseCard` fall back
  to plain company names when no file is supplied.
- If a future surface genuinely needs UI icons, use **Lucide** (1.5px stroke, rounded caps) at
  `--text-secondary` — this is a *substitution*, flagged here, not something the brand already uses.

### Assets shipped

`assets/logo-wordmark.png` (horizontal lockup, light backgrounds) ·
`assets/logo-wordmark-knockout.png` (white knockout for navy, derived from the same file) ·
`assets/og-image.png` (original social card the lockup was cropped from) ·
`assets/hero-main.png`, `assets/hero-handson.png`, `assets/photo-copilot.jpg` (brand imagery) ·
`assets/book-*.{jpg,png,webp}` (five published-book covers) · `assets/deco-1.svg`, `assets/deco-2.svg`
(small decorative marks from the books section).

---

## Index

**Root**
- `styles.css` — the one file consumers link; imports everything below.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper.
- `readme.md` — this file.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`.

**`guidelines/`** — 16 specimen cards: colors (brand / neutral / semantic / status / gradients),
type (display / body / utility / scale), spacing (scale / layout / radii / elevation),
brand (logo / imagery / motion & states).

**`components/`** — `window.WorkstyleEvolutionDesignSystem_407e19.<Name>`
- `core/` — `Button`, `Badge`, `SectionHeading`, `Breadcrumb`
- `content/` — `ServiceCard`, `CaseCard`, `BookCard`, `NewsItem`
- `layout/` — `SiteHeader`, `SiteFooter`, `CtaBanner`, `FaqAccordion`, `InfoTable`, `LogoWall`

**`ui_kits/corporate-site/`** — click-through recreation of the marketing site (home / 研修一覧 / ニュース / お問い合わせ). See its `README.md`.

### Intentional additions
No component library was provided, so the inventory above was derived from the *published site's* actual
UI blocks — every component maps to a block that exists on workstyle-evolution.co.jp. Nothing generic
(Toast, Tooltip, Avatar, Tabs …) was invented. `Breadcrumb` and `Badge` are standalone extractions of
patterns that appear inline on the site.

### Not built (no source)
Slide template, mobile app, docs site, and the AI偏差値チェック survey flow — none were provided.
