      window.addEventListener("load", () => {
        const contenedor = document.querySelector(".contenedor");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = 0;
        contenedor.setAttribute("visible", false);

        let width = 100,
          perfData = window.performance.timing,
          EstimatedTime = -(perfData.load - perfData.navigationStart),
          time = parseInt((EstimatedTime / 1000) % 60) * 100;
        // Loadbar Animation
        $(".loadbar").animate(
          {
            width: width + "%",
          },
          time
        );

        // Percentage Increment Animation
        let PercentageID = $("#precent"),
          start = 0,
          end = 100,
          durataion = time;
        animateValue(PercentageID, start, end, durataion);

        function animateValue(id, start, end, duration) {
          let range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            obj = $(id);
        }

        // Fading Out Loadbar on Finised
        setTimeout(function () {
          $(".contenedor").fadeOut(100);
        }, time);
      });
