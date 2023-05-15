export function validationNationalCode(value) {
  const check = +value[9];
  const sum =
    value
      .split("")
      .slice(0, 9)
      .reduce((acc, crr, index) => acc + +crr * (10 - index), 0) % 11;

  return sum < 2 ? check === sum : check + sum === 11;
}
