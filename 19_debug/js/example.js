
$('#example').click(function(){
  start('#example');

  shouldPrint('a')
  shouldPrint('b')
  shouldPrint('c')

  print('a')
  print('b')
  print('c')
});
