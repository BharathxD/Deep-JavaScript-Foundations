const user1 = {
  name: "will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

console.log(user1.score);

user1.increment();

console.log(user1.score);
