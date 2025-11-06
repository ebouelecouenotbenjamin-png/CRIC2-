 <script>
      const bouton = document.querySelector(".plus");

      const contenu = document.querySelector(".mon-contenu");

      bouton.addEventListener("click", function () {
        if (contenu.style.display === "none") {
          contenu.style.display = "block";
        } else {
          contenu.style.display = "none";
        }
      });
    </script>