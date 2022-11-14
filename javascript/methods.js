arrayUsers = ["John", "Mary", "Peter", "Jane", "Mark"];
arrayUsers2 = ["Andy", "Sandy", "Mandy", "Pandy", "Candy"];
arrayUsers3 = ["Perrie", "Zayn", "Harry", "Niall", "Liam"];

const usersIniciatec = [...arrayUsers, ...arrayUsers2, ...arrayUsers3];

console.log("usersIniciatec", usersIniciatec);
console.log("usersIniciatec length", usersIniciatec.length);

const usersWithMap = usersIniciatec.map((userIniciatec) => {
  return {
    username: userIniciatec,
    //phone: userIniciatec.phone,
  };
});
console.log("usersWithMap", usersWithMap);
