type millisecond = number;

export const sleep = (delay: millisecond) =>
  new Promise((r) => setTimeout(r, delay));
