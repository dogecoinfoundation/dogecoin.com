# How To Translate Dogecoin Website

- [How To Translate Dogecoin Website](#how-to-translate-dogecoin-website)
  - [Overview](#overview)
  - [Apply for translation](#apply-for-translation)
  - [Get the code](#get-the-code)
  - [Checkout a new branch](#checkout-a-new-branch)
  - [Register the language](#register-the-language)
  - [UI strings (i18n)](#ui-strings-i18n)
  - [Page content](#page-content)
  - [Mark a language as complete](#mark-a-language-as-complete)
  - [Test translation](#test-translation)
  - [Pull Request](#pull-request)
  - [Tips](#tips)

## Overview

Dogecoin.com is a **Hugo** multilingual site. A full translation usually needs:

| Layer | Location | What it is |
|-------|----------|------------|
| Language registration | `config.toml` + `data/langFlags.yaml` | Enable the locale in Hugo + flag in the language switcher |
| UI chrome | `i18n/<lang>.toml` | Navbar, buttons, homepage partials (not Markdown pages) |
| Content | `content/<lang>/…` | Dogepedia articles, wallet pages, how-tos (Markdown) |

Start with **UI strings + homepage**, then expand Dogepedia over time. Partial translations are OK — the site shows a banner until `finish[translation]` is set to `yes` (see below).

## Apply for translation

1. Join the Dogecoin Discord and say hello in the **website** channel.
2. Coordinate so two people are not translating the same language at once.
3. Prefer a GitHub account so you can open a Pull Request from a fork.

## Get the code

Follow [How To Get Dogecoin Website](how-to-get-website.md) (fork + clone).

## Checkout a new branch

```bash
git checkout main
git pull upstream main   # or origin, depending on your remotes
git checkout -b personal-<lang>-translation
```

Example: `personal-hi-translation`.

### GUI

- GitHub Desktop: **Current Branch → New Branch**

### Markdown editor

Any mainstream Markdown editor works (VS Code, Typora, etc.). Keep front matter (`+++ … +++`) intact.

## Register the language

### 1. `config.toml`

At the repo root, under `[languages]`, add a block for your language code (use BCP-47 style codes already used by the site: `zh-cn`, `pt-pt`, `ja`, …).

Copy an existing language block (for example `[languages.en]` / menus) and:

- Set `languageName`, `weight`, and `contentDir = "content/<lang>"`
- Duplicate **menu** entries under `[[languages.<lang>.menu.main]]` and translate the `name` fields

### 2. `data/langFlags.yaml`

Add a mapping so the language switcher can show a flag:

```yaml
hi: in   # language code → ISO flag code used by flag-icon CSS
```

Use the same pattern as the existing entries in that file.

## UI strings (i18n)

UI chrome (headers, wallet section titles, buttons) lives in TOML files:

```
i18n/en.toml        # source of truth (English)
i18n/<lang>.toml    # your translation
```

**Do not** create nested folders like `i18n/hi/…`. One file per language: `i18n/hi.toml`.

Recommended workflow:

```bash
cp i18n/en.toml i18n/<lang>.toml
```

Then translate the `other = "…"` values. Keep the **keys** (left side / section names) unchanged.

Example key shape:

```toml
["wallets[title]"]
other = "Wallets"
```

## Page content

1. Copy English Markdown trees into your language directory:

```bash
# Example: start with Dogepedia index + a few articles
mkdir -p content/<lang>/dogepedia/articles
cp content/en/dogepedia.md content/<lang>/
cp content/en/dogepedia/_index.md content/<lang>/dogepedia/
cp content/en/dogepedia/articles/what-is-dogecoin.md content/<lang>/dogepedia/articles/
```

2. Translate body text. Keep:

- Front matter keys (`title`, `type`, `date`, …)
- Internal links preferably as language-relative paths Hugo already understands
- Image paths that start with `/assets/…` (shared static assets)

3. If `main` moves while you work:

```bash
git fetch upstream
git merge upstream/main
# resolve conflicts, re-test
```

## Mark a language as complete

When the locale is ready for production (no “partial translation” banner):

In `i18n/<lang>.toml` set:

```toml
["finish[translation]"]
other = "yes"
```

Until then, leave it unset or not `yes` so visitors see the help-wanted banner.

## Test translation

Follow [How To Run Dogecoin Website](how-to-run-website.md), then open:

- `http://localhost:1313/` (default language)
- `http://localhost:1313/<lang>/` for your language

Check:

- Language switcher shows your flag and label
- Homepage strings are translated
- At least one Dogepedia page renders without missing layouts
- Mobile: language dropdown does not break the header

## Pull Request

1. Push your branch to **your fork**.
2. Open a PR against `dogecoinfoundation/dogecoin.com` **main**.
3. Title like: `i18n: <Language> translation (UI + Dogepedia start)`.
4. Mention the PR in Discord **#website**.

## Tips

- Prefer **small PRs** (UI first, then content packs) over one huge dump.
- Do not machine-translate and ship unreviewed — community quality matters.
- Wallet pages under `content/<lang>/wallets/` are optional; English wallet directory is often enough at first.
- Questions? Discord **#website** or open a draft PR early for feedback.

Much wow. Such multilingual. **Do Only Good Everyday.**
