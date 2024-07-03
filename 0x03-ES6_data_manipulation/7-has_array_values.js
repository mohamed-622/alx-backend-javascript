export default function hasValuesFromArray(arr, values) {
  for (const value of values) {
    if (!arr.has(value)) {
      return false;
    }
  }
  return true;
}
