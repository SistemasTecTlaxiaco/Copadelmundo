      const showInfo = () => {
        let y = 0;
        const microButton = document.querySelector("#micro-button");
        const infoButton = document.querySelector("#info-button");
        const ideaButton = document.querySelector("#idea-button");
        const webButton = document.querySelector("#web-button");
        const gitButton = document.querySelector("#git-button");
        const text = document.querySelector("#text");

        microButton.setAttribute("visible", true);
        setTimeout(() => {
          infoButton.setAttribute("visible", true);
        }, 300);
        setTimeout(() => {
          ideaButton.setAttribute("visible", true);
        }, 600);
        setTimeout(() => {
          webButton.setAttribute("visible", true);
        }, 900);
        setTimeout(() => {
          gitButton.setAttribute("visible", true);
        }, 1200);

        let currentTab = "";
        webButton.addEventListener("click", function (evt) {
          text.setAttribute("value", "pendiente");
          currentTab = "web";
        });
        ideaButton.addEventListener("click", function (evt) {
          text.setAttribute(
            "value",
            "sabias que... El primer mundial fue celebrado en 1930 en Uruguay, y lo ganó el propio Uruguay/"
          );
          currentTab = "idea";
          setTimeout(() => {
            showPortfolio(() => {
              //
            });
          }, 300);
        });
        infoButton.addEventListener("click", function (evt) {
          text.setAttribute(
            "value",
            "Hola, soy la copa del mundo y mi diseño representa dos figuras humanas recibiendo a la Tierra"
          );
          currentTab = "info";
        });
        gitButton.addEventListener("click", function (evt) {
          console.log("loc");
          text.setAttribute(
            "value",
            "Ingresa a nuestro repositorio para ver toda la documentación relacionada al desarrollo de este proyecto"
          );
          currentTab = "git";
        });

        text.addEventListener("click", function (evt) {
          if (currentTab === "web") {
            window.location.href = "/";
          }
          if (currentTab === "idea") {
            window.location.href =
              "https://www.milenio.com/futbol-internacional/mundial/copa-mundo-historia-diseno-trofeo-mundial";
          }
          if (currentTab === "git") {
            window.location.href =
              "https://github.com/SistemasTecTlaxiaco/Copadelmundo";
          }
        });
      };

      const showPortfolio = (done) => {
        const portfolio = document.querySelector("#portfolio-panel");
        const portfolioLeftButton = document.querySelector(
          "#portfolio-left-button"
        );
        const portfolioRightButton = document.querySelector(
          "#portfolio-right-button"
        );
        const paintandquestPreviewButton = document.querySelector(
          "#paintandquest-preview-button"
        );

        let y = 0;
        let currentItem = 0;

        portfolio.setAttribute("visible", true);

        const showPortfolioItem = (item) => {
          for (let i = 0; i <= 2; i++) {
            document
              .querySelector("#portfolio-item" + i)
              .setAttribute("visible", i === item);
          }
        };
        const id = setInterval(() => {
          y += 0.008;
          if (y >= 0.6) {
            clearInterval(id);
            portfolioLeftButton.setAttribute("visible", true);
            portfolioRightButton.setAttribute("visible", true);
            portfolioLeftButton.addEventListener("click", () => {
              currentItem = (currentItem + 1) % 3;
              showPortfolioItem(currentItem);
            });
            portfolioRightButton.addEventListener("click", () => {
              currentItem = (currentItem - 1 + 3) % 3;
              showPortfolioItem(currentItem);
            });

            paintandquestPreviewButton.addEventListener("click", () => {
              paintandquestPreviewButton.setAttribute("visible", false);
              const testVideo = document.createElement("video");
              const canplayWebm = testVideo.canPlayType(
                'video/webm; codecs="vp8, vorbis"'
              );
              if (canplayWebm == "") {
                document
                  .querySelector("#paintandquest-video-link")
                  .setAttribute("src", "#paintandquest-video-mp4");
                document.querySelector("#paintandquest-video-mp4").play();
              } else {
                document
                  .querySelector("#paintandquest-video-link")
                  .setAttribute("src", "#paintandquest-video-webm");
                document.querySelector("#paintandquest-video-webm").play();
              }
            });

            setTimeout(() => {
              done();
            }, 500);
          }
          portfolio.setAttribute("position", "0 " + y + " -0.01");
        }, 10);
      };

      const showAvatar = (onDone) => {
        const avatar = document.querySelector("#avatar");
        let z = -0.3;
        const id = setInterval(() => {
          z += 0.008;
          if (z >= 0.3) {
            clearInterval(id);
            onDone();
          }
          avatar.setAttribute("position", "0 -0.25 " + z);
        }, 10);
      };

      AFRAME.registerComponent("mytarget", {
        init: function () {
          this.el.addEventListener("targetFound", (event) => {
            console.log("target found");
            showAvatar(() => {
              //
              setTimeout(() => {
                showInfo();
              }, 300);
            });
          });
          this.el.addEventListener("targetLost", (event) => {
            console.log("target found");
          });
        },
      });
   