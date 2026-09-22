document.addEventListener("DOMContentLoaded", () => {

    const scene = document.querySelector(".scene");
    const particlesContainer = document.querySelector(".particles");
    const startButton = document.getElementById("startButton");

    // ==============================
    // PARTÍCULAS DORADAS
    // ==============================

    function createParticle() {

        const particle = document.createElement("span");

        particle.style.position = "absolute";
        particle.style.width = `${Math.random() * 4 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.borderRadius = "50%";

        particle.style.background = "rgba(255, 214, 79, 0.9)";

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `${Math.random() * 20 - 10}%`;

        particle.style.boxShadow =
            "0 0 8px rgba(255, 193, 7, 0.8)";

        particle.style.pointerEvents = "none";

        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * 5;

        particle.animate(
            [
                {
                    transform: "translateY(0) scale(0.4)",
                    opacity: 0
                },
                {
                    opacity: 0.9,
                    offset: 0.2
                },
                {
                    transform:
                        `translateY(-${Math.random() * 500 + 300}px)
                         translateX(${Math.random() * 100 - 50}px)
                         scale(1)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                delay: delay * 1000,
                iterations: Infinity,
                easing: "ease-out"
            }
        );

        particlesContainer.appendChild(particle);
    }

    // Crear partículas
    for (let i = 0; i < 45; i++) {
        createParticle();
    }


    // ==============================
    // MOVIMIENTO SUAVE DEL RAMO
    // ==============================

    const bouquet = document.querySelector(".bouquet");

    if (bouquet) {

        scene.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 10;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 10;

            bouquet.style.transform =
                `translate(${x}px, ${y}px)`;
        });

        scene.addEventListener("mouseleave", () => {

            bouquet.style.transform =
                "translate(0, 0)";
        });
    }


    // ==============================
    // BOTÓN PRINCIPAL
    // ==============================

    if (startButton) {

        startButton.addEventListener("click", () => {

            scene.classList.add("opened");

            startButton.innerHTML = "🌼";

            startButton.style.transform =
                "scale(0.8)";

            setTimeout(() => {

                startButton.innerHTML =
                    "Mi regalo para ti";

                startButton.style.transform =
                    "scale(1)";

            }, 700);
        });
    }


    // ==============================
    // EFECTO DE LUZ AL HACER CLICK
    // ==============================

    scene.addEventListener("click", (event) => {

        const flash = document.createElement("div");

        flash.style.position = "absolute";
        flash.style.left = `${event.clientX}px`;
        flash.style.top = `${event.clientY}px`;

        flash.style.width = "20px";
        flash.style.height = "20px";

        flash.style.borderRadius = "50%";

        flash.style.background =
            "rgba(255, 214, 79, 0.8)";

        flash.style.boxShadow =
            "0 0 40px 20px rgba(255, 193, 7, 0.25)";

        flash.style.pointerEvents = "none";

        flash.style.transform =
            "translate(-50%, -50%)";

        scene.appendChild(flash);

        flash.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",
                    opacity: 0.9
                },
                {
                    transform:
                        "translate(-50%, -50%) scale(8)",
                    opacity: 0
                }
            ],
            {
                duration: 900,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            flash.remove();
        }, 900);
    });

});
