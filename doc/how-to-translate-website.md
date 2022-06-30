# How To Translate Dogecoin Preview Website

- [How To Translate Dogecoin Preview Website](#how-to-translate-dogecoin-foundation-website)
  - [Apply for translation](#apply-for-translation)
  - [Get the code](#get-the-code)
  - [Checkout a new branch](#checkout-a-new-branch)
    - [Command-line](#command-line)
    - [GUI](#gui)
    - [Markdown Editor](#markdown-editor)
  - [Update config.toml](#update-configtoml)
  - [Update langFlags.yaml](#update-langflagsyaml)
  - [Create/Update translated-lang.toml](#createupdate-translated-langtoml)
  - [Translation](#translation)
  - [Test translation](#test-translation)
  - [Pull Request](#pull-request)
  - [PR Review](#pr-review)
  - [Merge to main branch](#merge-to-main-branch)

## Apply for translation

* Apply translation access through Discord.

## Get the code

* Get the code by following the steps in '[How To Get Dogecoin Preview Website](how-to-get-website.md)

## Checkout a new branch

* Checkout a new branch for you local translation, eg. ```personal-lang-trans-branch```.


### Command-line

```
git checkout -b personal-lang-trans-branch
```

### GUI

* Current Branch (main) -> New Branch
![](img/github-desktop-new-branch-1.png)
* Name the new branch
![](img/github-desktop-new-branch-2.png)

### Markdown Editor
* Any mainstrem markdown editor is suitable for processing the translation tasks.

## Update config.toml

* Open file '```config.toml```' at root path.
* Add according language (eg. translated-lang) in ```[languages]``` section.
* Add menu items of Home Page in your 'translated-lang' section (eg. ```zh-cn``` is ```[languages.zh-cn.menu]``` and following ```[[languages.zh-cn.menu.main]]```).

## Update langFlags.yaml

* Open file '```themes/hello-friend-ng/data/langFlags.yaml```'.
* Add according language (eg. translated-lang) in ```langFlags.yaml```.

## Create/Update translated-lang.toml

* Create file if it does NOT exist '```i18n/translated-lang/```' (eg. '```i18n/zh-cn/```').
* Update file if it does exist '```i18n/translated-lang/```' (eg. '```i18n/zh-cn/```').


## Translation

* Copy the original english (markdown format) files (eg. ```about.md```) and paste as the to-be-translated-files (eg. ```translated-lang/about.md```), translate them then.
* If there are some updates on the ```main``` branch during your translating process, you should merge them to your personal-trans-branch first (resolve conflicts as well), to make sure your translation is update-to-date.

## Test translation

* Run the website locally by following the steps in [How To Run Dogecoin Preview Website](how-to-run-website.md) to test the translation, make sure it will work as expected.

## Pull Request

* Submit changes as PR, then mention your PR in the channel ```website``` on Discord.


## PR Review

* It's ideal to do ```peer review``` if there are at least TWO peers who are familiar with the same language translations.
* If ONLY the translator is familiar with the translated laguage, then there should be at least another TWO reviewer to be requested to do the review task.

## Merge to main branch

* Once the review PASS, then the ORIGINAL translator should do the ```merge``` action from ```personal-lang-trans-branch``` to ```main``` branch.
* Remember to resolve conflict if there happens.