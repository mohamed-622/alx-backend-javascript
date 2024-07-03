export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') return '';

  const newArray = Array.from(set)
    .filter((val) => val && val.startsWith(startString))
    .map((val) => val.slice(startString.length))
    .join('-');

  return newArray;
}
