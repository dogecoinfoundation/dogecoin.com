# Dogecoin.com
Temporary repo for dogecoin.com redesign

## How to get up and running:
I'm working off of a redesign branch and reconfigured gh-pages.yml to exclusively build and deploy this branch name. After you clone in order to make this work for github pages please checkout a new branch called redesign in your respective fork by doing:

`git checkout -b redesign main`

I've added bootstrap to help easily facilitate content alignment so you'll need to have Node.js installed: https://nodejs.org/en/

After cloning the repo to your local run:

`npm i`

This will add bootstrap into your node_modules folder. bootstrap.min.js and bootstrap.min.css are minified on each hugo build so there's nothing more to do with regards to config. After that you can add any bootstrap class to frontend html or you can add custom css/scss to any of the style sheets in /themes/assets/scss or /themes/assets/css/

You'll find in the config.toml a new line:

```
[module]
  [[module.mounts]]
    source = "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    target = "assets/js/bootstrap.bundle.min.js"
```

This is how bootstrap is injected into our theme.

Since this template was bootstrapped (forgive the overuse...) from the foundation site however is a single page site so far, all content, previous site structure has been gutted. The only files developers should focus on reside in themes/hello-friend-ng/layouts: index.html (main file with injected partials). ./partials: whatisdogecoin.html, wallets.html, community.html, resources.html with corresponding styles with the same names in themes/hello-friend-ng/assets/scss: _whatisdogecoin.scss, _wallets.scss...so on and so forth.

The video background is a little bit hacky and can be refined but how it works is using a div that targets the viewport. The html is found in index.html, styles in _home.scss and javascript at the bottom of the index.html page. The javascript calculates the document.querySelector("#home").getBoundingClientRect() and as soon as user scrolls into #what-is-dogecoin it hides the video background while simultaneously removing the transparent background on our sticky navbar.

```
    <script type="text/javascript">
        var navbar = document.querySelector('header')
        var rect = document.querySelector("#home").getBoundingClientRect();
        var offset = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
        };

        // Script to hide/show menu
        var video = document.querySelector('#video-header');
        window.onscroll = function () {
            // pageYOffset or scrollY
            if (window.pageYOffset > rect.height) {
                navbar.classList.add('scrolled')
                video.classList.add('scrolled')
            } else {
                navbar.classList.remove('scrolled')
                video.classList.remove('scrolled')
            }
        }
    </script>
```

## Todo

Refine all styles with extra emphasis on viewport breakpoints. This was sketched out using max width on 1980x1080 display. These can be configured in each 'sections' .scss file using:

```
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```
if added to _variables.scss or min-width media queries:

```
// Source mixins

// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

These Sass mixins translate in our compiled CSS using the values declared in our Sass variables. For example:
```
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
```

or by using max-width:
```
// No media query necessary for xs breakpoint as it's effectively `@media (max-width: 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

These mixins take those declared breakpoints, subtract .02px from them, and use them as our max-width values. For example:
```
// `xs` returns only a ruleset and no media query
// ... { ... }

// `sm` applies to x-small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// `md` applies to small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// `lg` applies to medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// `xl` applies to large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// `xxl` applies to x-large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { ... }
```

You can use single breakpoints or between breakpoints:
```
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
```

For example the @include media-breakpoint-only(md) { ... } will result in :
```
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

```
@include media-breakpoint-between(md, xl) { ... }
```
Which results in:
```
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```

The choice is yours.

This however should be the structural basis on which we can properly align each element according to CB's photoshop designs.

Outside of breakpoints, alignment, links need to be configured for icons such as reddit, twitter links et al.

Belles Footer needs to be added to the single page design.

Translations need to be configured.

## Dogepedia

I've added a basic example of sidebar nav in Resources section with the first one config with an accordian. The toggle buttons need to be replaced with static/assets/images/23.png and 24.png

This can also be configured with content.md pages the same as the old site or hard coded into the resources.html partial.

Anyway this should give all ample work for a while, apologies on the delay. No worries if anyone should want to completely rework structure do anything, this is just an opinionated starter. Happy coding Shibes! <3