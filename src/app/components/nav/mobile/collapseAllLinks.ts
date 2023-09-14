const collapseAllLinks = () => {
  const buttons = document.querySelectorAll("nav button[aria-expanded]");

  buttons.forEach((btn) => {
    const listOfLinks = btn.nextElementSibling as HTMLUListElement;

    btn.ariaExpanded = "false";
    listOfLinks.style.height = "0px";
  });
};

export default collapseAllLinks;
