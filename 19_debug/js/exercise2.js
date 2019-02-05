
$('#exercise2').click(function(){
  start('#exercise2');

  shouldPrint('dog');
  shouldPrint('chases');
  shouldPrint('cat');
  shouldPrint('eats');
  shouldPrint('mouse');


  let myList = ['dog', 'cat', 'mouse'];

  myList.forEach(function(elm, index) {
    print(elm);
    if (index === 0){
      print('chases');
    } else if(index === 1){
      print('eats');
    }
  });
});
