function createUser(name, score) {
  const user = {};
  user.name = name;
  user.score = score;
  user.incrment = function () {
    user.score++;
  };
  return user;
}

const user1 = createUser("Will", 1);
const user2 = createUser("Smith", 2);

console.log([user1, user2]);
