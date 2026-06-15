const menu = document.querySelector<HTMLElement>(".menu");

menu?.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
});
