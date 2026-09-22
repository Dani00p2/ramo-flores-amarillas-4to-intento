document.addEventListener("DOMContentLoaded", () => {

    const scene =
        document.getElementById("scene");

    const particlesContainer =
        document.querySelector(".particles");

    const starsContainer =
        document.querySelector(".stars");

    const bouquet =
        document.querySelector(".bouquet");

    const startButton =
        document.getElementById("startButton");


    /* =====================================
       ESTRELLAS
    ===================================== */

    function createStars() {

        const amount =
            window.innerWidth < 600
                ? 35
                : 70;

        for (let i = 0; i < amount; i++) {

            const star =
                document.createElement("span");

            star.className = "star";

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

            starsContainer.appendChild(star);
        }
    }


    /* =====================================
       PARTÍCULAS
    ===================================== */

    function createParticles() {

        const amount =
            window.innerWidth < 600
                ? 25
                : 45;

        for (let i = 0; i < amount; i++) {

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
       PARALLAX DEL RAMO
    ===================================== */

    function enableParallax() {

        if (!bouquet) {
            return;
        }

        scene.addEventListener(
            "mousemove",
            (event) => {

                if (
                    scene.classList.contains(
                        "opened"
                    )
                ) {
                    return;
                }

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

        scene.addEventListener(
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
       FLASH DE PANTALLA
    ===================================== */

    function createFlash() {

        const flash =
            document.createElement("div");

        flash.style.position =
            "fixed";

        flash.style.inset =
            "0";

        flash.style.background =
            "white";

        flash.style.opacity =
            "0";

        flash.style.pointerEvents =
            "none";

        flash.style.zIndex =
            "100";

        document.body.appendChild(flash);

        flash.animate(
            [
                {
                    opacity: 0
                },
                {
                    opacity: 0.8
                },
                {
                    opacity: 0
                }
            ],
            {
                duration: 900,
                easing: "ease-out"
            }
        ).onfinish = () => {
            flash.remove();
        };
    }


    /* =====================================
       ABRIR REGALO
    ===================================== */

    if (startButton) {

        startButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                if (
                    scene.classList.contains(
                        "opened"
                    )
                ) {
                    return;
                }

                /* Activar animación */

                scene.classList.add(
                    "opened"
                );

                /* Primer destello */

                createFlash();

                /* Cambiar texto */

                const text =
                    startButton.querySelector(
                        "span:first-child"
                    );

                if (text) {

                    text.textContent =
                        "PARA TI ✦";
                }

                /* Desactivar botón */

                startButton.disabled =
                    true;

                startButton.style.pointerEvents =
                    "none";

                /* Segundo destello */

                setTimeout(() => {

                    createFlash();

                }, 500);
            }
        );
    }


    /* =====================================
       CLICK GENERAL
    ===================================== */

    scene.addEventListener(
        "click",
        (event) => {

            if (
                event.target === startButton ||
                startButton.contains(event.target)
            ) {
                return;
            }

            const flash =
                document.createElement("div");

            flash.style.position =
                "fixed";

            flash.style.left =
                `${event.clientX}px`;

            flash.style.top =
                `${event.clientY}px`;

            flash.style.width =
                "20px";

            flash.style.height =
                "20px";

            flash.style.borderRadius =
                "50%";

            flash.style.background =
                "rgba(255,220,100,0.9)";

            flash.style.boxShadow =
                "0 0 45px 20px rgba(255,193,7,0.35)";

            flash.style.pointerEvents =
                "none";

            flash.style.zIndex =
                "110";

            document.body.appendChild(
                flash
            );

            flash.animate(
                [
                    {
                        transform:
                            "translate(-50%,-50%) scale(.5)",

                        opacity: 0.9
                    },

                    {
                        transform:
                            "translate(-50%,-50%) scale(8)",

                        opacity: 0
                    }
                ],
                {
                    duration: 900,

                    easing:
                        "cubic-bezier(.16,1,.3,1)"
                }
            ).onfinish = () => {
                flash.remove();
            };
        }
    );


    /* =====================================
       INICIO
    ===================================== */

    createStars();

    createParticles();

    enableParallax();

});
