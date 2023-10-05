// TODO: write your code here
export default function correctNumber(number) {
  let result = number.replace(/[()-\s]/g, '');
  result = result.replace(/^[8|7]/, '+7');
  result = result.replace(/^9/, '+79');
  return result;
}
