export const getVisibilityOfElement = (element: HTMLElement): number => {
  const viewPortHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.offsetHeight;

  const distance = scrollTop + viewPortHeight - elementOffsetTop;
  const percentage = Math.round(
    distance / ((viewPortHeight + elementHeight) / 100)
  );

  return percentage >= 100 ? 0 : Math.max(0, percentage);
};
