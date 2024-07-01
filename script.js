// // 1
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// // 2
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }
// // 3
// for (let i = 1; i <= 10; i++) {
//   console.log(7 * i);
// }
// // 4
// let arr = [1, 2, 3, 4, 5];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }
// // 5
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] === 7) {
//     break;
//   } else {
//     console.log(arr2[i]);
//   }
// }
// 6
// let n = 20;
// let i = 10;
// while (i <= n) {
//   console.log(i);

//   i++;
// }
// 7
let i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
