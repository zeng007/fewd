
$('#exercise1').click(function(){
  start('#exercise1');

  shouldPrint('banana');
  shouldPrint('banana');
  shouldPrint('lemon');
  shouldPrint('banana');


  let myList = ['apple', 'apple', 'pear', 'apple'];

  function func1() {
    print('banana');
  }

  function func2() {
    func1();
    print('lemon');
    func1();
  }

  func1();
  func2();
});
