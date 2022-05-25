export const getRandomNumber = (length: number) => {
  return Math.floor(Math.random() * length);
};

export const wait = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));
