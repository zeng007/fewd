
$('#exercise3').click(function(){
  start('#exercise3');

  shouldPrint('Bob is 32 years old');
  shouldPrint('Sarah is 35 years old');
  shouldPrint('Carlos is 26 years old');
  shouldPrint('Ana is 22 years old');

  let myList = [
    {
      name: 'Bob',
      born: 1986,
    },
    {
      name: 'Sarah',
      born: 1983,
    },
    {
      name: 'Carlos',
      born: 1992,
    },
    {
      name: 'Ana',
      born: 1996,
    },
  ];

  function printAge(person) {
    let age = 2018 - person.born;
    print(`${ person.name } is ${ age } years old`);
  }
  myList.forEach(printAge);
});
