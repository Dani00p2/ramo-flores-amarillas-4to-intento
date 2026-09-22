document.addEventListener("DOMContentLoaded", () => {

    const homeScene =
        document.getElementById("homeScene");

    const giftScene =
        document.getElementById("giftScene");

    const startButton =
        document.getElementById("startButton");

    const backButton =
        document.getElementById("backButton");

    const starsContainer =
        document.querySelector(".stars");

    const particlesContainer =
        document.querySelector(".particles");

    const bouquet =
        document.querySelector(".bouquet");


    /* =====================================
       ESTRELLAS
    ===================================== */

    function createStars() {

        if (!starsContainer) {
            return;
        }

        const amount =
            window.innerWidth < 600
                ? 35
                : 70;

        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const star =
                document.createElement("span");

            star.className =
                "star";

            star.style.left =
                `${Math.random() * 100}%`;

            star.style.top =
                `${Math.random() * 100}%`;

            star.style.setProperty(
                "--duration",
                `${2 + Math.random() * 4}s`
            );

            star.style.animationDelay =
                `${Math.random() * 5}s`;

            const size =
                Math.random() * 2.5 + 1;

            star.style.width =
                `${size}px`;

            star.style.height =
                `${size}px`;

            starsContainer.appendChild(
                star
            );
        }
    }


    /* =====================================
       PARTÍCULAS
    ===================================== */

    function createParticles() {

        if (!particlesContainer) {
            return;
        }

        const amount =
            window.innerWidth < 600
                ? 25
                : 45;

        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.className =
                "particle";

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.setProperty(
                "--duration",
                `${7 + Math.random() * 8}s`
            );

            particle.style.setProperty(
                "--delay",
                `${Math.random() * 8}s`
            );

            particle.style.setProperty(
                "--drift",
                `${Math.random() * 180 - 90}px`
            );

            const size =
                Math.random() * 3 + 1;

            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particlesContainer.appendChild(
                particle
            );
        }
    }


    /* =====================================
       PARALLAX
    ===================================== */

    function enableParallax() {

        if (
            !homeScene ||
            !bouquet
        ) {
            return;
        }

        homeScene.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth
                        - 0.5
                    ) * 12;

                const y =
                    (
                        event.clientY /
                        window.innerHeight
                        - 0.5
                    ) * 8;

                bouquet.style.marginLeft =
                    `${x}px`;

                bouquet.style.marginTop =
                    `${y}px`;
            }
        );

        homeScene.addEventListener(
            "mouseleave",
            () => {

                bouquet.style.marginLeft =
                    "0";

                bouquet.style.marginTop =
                    "0";
            }
        );
    }


    /* =====================================
       ABRIR REGALO
    ===================================== */

    if (startButton) {

        startButton.addEventListener(
            "click",
            () => {

                homeScene.style.opacity =
                    "0";

                homeScene.style.transform =
                    "scale(0.96)";

                homeScene.style.transition =
                    "opacity .7s ease, transform .7s ease";


                setTimeout(() => {

                    homeScene.style.display =
                        "none";

                    giftScene.classList.add(
                        "active"
                    );

                }, 650);

            }
        );
    }


    /* =====================================
       VOLVER
    ===================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                giftScene.classList.remove(
                    "active"
                );


                setTimeout(() => {

                    homeScene.style.display =
                        "flex";

                    requestAnimationFrame(
                        () => {

                            homeScene.style.opacity =
                                "1";

                            homeScene.style.transform =
                                "scale(1)";
                        }
                    );

                }, 700);

            }
        );
    }


    /* =====================================
       INICIO
    ===================================== */

    createStars();

    createParticles();

    enableParallax();

});
