document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".option").forEach(o => {
        o.classList.remove("active");
        o.querySelector("input[type=radio]").checked = false;
        const childOptions = o.querySelector(".unit-options");
        if (childOptions) {
          childOptions.classList.remove("open");
        }
      });

      option.classList.add("active");
      option.querySelector("input[type=radio]").checked = true;

      const unitOptions = option.querySelector(".unit-options");
      if (unitOptions) {
        unitOptions.classList.add("open");
      }
    });
  });
});
