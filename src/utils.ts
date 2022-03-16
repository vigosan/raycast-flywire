export const generatePan = () => {
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 9999;
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  const letter = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

  return `FLYPA${num}${letter}`;
};
