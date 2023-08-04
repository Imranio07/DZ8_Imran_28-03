const isPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.substr(i,1)==='1'||str.substr(i,1)==='2'||str.substr(i,1)==='3'||str.substr(i,1)==='4'||str.substr(i,1)==='5'||str.substr(i,1)==='6'||str.substr(i,1)==='7'||str.substr(i,1)==='8'||str.substr(i,1)==='9'||str.substr(i,1)==='0'){
      return false;
    }
  }
  str = str.toLowerCase().replace(/\W/g, '');
  const strArray = [...str];
  const arrayFor = [];
  strArray.forEach(index => {arrayFor.unshift(index);});
  const reversedString = arrayFor.join('');
  return str === reversedString;
}
console.log(isPalindrome("аргенитина манит негра"))