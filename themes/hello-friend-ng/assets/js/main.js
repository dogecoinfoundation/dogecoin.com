/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */

(function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const chosenTheme =
        window.localStorage && window.localStorage.getItem("theme");
    const chosenThemeIsDark = chosenTheme == "dark";
    const chosenThemeIsLight = chosenTheme == "light";
    const header = document.getElementById("header");
    const doge = document.querySelector(".kabosu");
    const thought = document.querySelector(".thought");
    const nose = document.getElementById("nose");
    const leftEye = document.getElementById("left-eye");
    const rightEye = document.getElementById("right-eye");

    // Detect the color scheme the operating system prefers.
    function detectOSColorTheme() {
        if (chosenThemeIsDark) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else if (chosenThemeIsLight) {
            document.documentElement.setAttribute("data-theme", "light");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }

    // Switch the theme.
    function switchTheme(e) {
        if (chosenThemeIsDark) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        detectOSColorTheme();
        window.location.reload();
    }

    // Event listener
    if (themeToggle) {
        themeToggle.addEventListener("click", switchTheme, false);
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => e.matches && detectOSColorTheme());
        window
            .matchMedia("(prefers-color-scheme: light)")
            .addEventListener("change", (e) => e.matches && detectOSColorTheme());

        detectOSColorTheme();
    } else {
        localStorage.removeItem("theme");
    }

    // Shring the navbar when scrolling
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                header.classList.add("minimize");
            } else {
                header.classList.remove("minimize");
            }
        });
    }

    if (doge) {
        let leftEyeX = 0
        let rightEyeX = 0

        nose.addEventListener("mousedown", () => {
            if (!document.body.classList.contains("armageddon")) {
                document.body.classList.add("armageddon");
                setTimeout(() => {
                    document.body.classList.remove("armageddon");
                }, 5000);
            }
        });

        window.addEventListener("mousemove", (e) => {
            const {clientX, clientY} = e;
            const {clientWidth, clientHeight} = document.documentElement;
            const posX = ((clientWidth / 2 - clientX) * 30) / clientWidth;
            const posY = ((clientHeight / 2 - clientY) * 10) / clientHeight;

            if (posX > 1) {
                leftEyeX = 1
                rightEyeX = 1
            } else if (posX < -13) {
                leftEyeX = -13
            } else {
                leftEyeX = posX
                rightEyeX = posX
            }
            if (posX > 1) {
                rightEyeX = 1
            } else if (posX < -9) {
                rightEyeX = -9
            } else {
                rightEyeX = posX
            }
            leftEye.style.transform = `translate(${-leftEyeX}px, ${-posY}px)`;
            rightEye.style.transform = `translate(${-rightEyeX}px, ${-posY}px)`;
        });
    }
})();
