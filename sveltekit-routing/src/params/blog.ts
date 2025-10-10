export function match(param) {
  return Number.isInteger(+param) && +param > 0 && +param < 51;
}
