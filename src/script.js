document.addEventListener("DOMContentLoaded", function () {
  const sidebarBtns = document.querySelectorAll(".sidebar__btn");

  const handleButtonClick = (buttons, activeClass) => {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((button) => button.classList.remove(activeClass));
        btn.classList.add(activeClass);
      });
    });
  };

  handleButtonClick(sidebarBtns, "sidebar__btn--active");
});
