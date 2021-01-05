const pad = (num: number): string => {
  const str = num.toString(10);
  return str.length === 2 ? str : "0" + str;
};

export const timeToString = (time: number): string => {
  const min = pad(Math.floor(time / 60));
  const sec = pad(time % 60);
  return [min, sec].join(':');
};