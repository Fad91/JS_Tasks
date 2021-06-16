// Задача - необходимо найти, сколько гласных в строке - написать функцию findVowels, которая принимает строку
// в качестве аргумента
// Делаем массив гласных и каунтер, далее делаем цикл из букв в строке с понижением регистра, и проводим итерацию с
// циклом и проверяем, если в массиве гласных есть char (буква из строки) методом .includes 
// то увеличиваем каунтер и возвращаем его.

function findVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "y"];
  for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
          count +=1
      }
  }
  console.log(count)
  return count;
}

// Второе решение, объявляем переменную матчед где проверяем с помощью регЭкспа и метода .match на наличие гласных  

function findVowels2(str) {
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
  }

findVowels('daddy')