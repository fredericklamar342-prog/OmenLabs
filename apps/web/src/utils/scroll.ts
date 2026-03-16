export const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Account for sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
