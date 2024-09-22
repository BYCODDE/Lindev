// შევქმნათ ფუნქცია რომელსაც გადაეცემა სტრინგი არეული ასოებით დიდი და პატარა, ფუნქციამ უნდა დაგვიბრუნოს ყველა სიტყვა პატარა ასოთი მაგრამ პირველი ასო უნდა იყოს დიდი, მაგალითად ჩავაწოდეთ: heLLO wOrlD, ფუნქციამ უნდა დააბრუნოს Hello World

const myFUnc = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(
      (word) =>
        word.split("")[0].toUpperCase() + word.split("").slice(1).join("")
    )
    .join(" ");
};

console.log(myFUnc("hello world"));
