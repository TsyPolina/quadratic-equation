module.exports = function solveEquation(equation) {
  let x1, x2, discriminant;
  let array_input = [];
  let need_str = equation.replace(/\s/g, '').replace(/x\^2|x/g, '');
  array_input = need_str.split('*');
  let a = array_input[0];
  let b = array_input[1];
  let c = array_input[2];
  discriminant = b * b - 4 * a * c;
  x1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
  x2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));
  if (x1 > x2) {
    return [x2, x1];
  }
  else {
    return [x1, x2];
  }
}
