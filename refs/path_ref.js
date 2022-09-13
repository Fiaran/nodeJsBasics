const path = require('path') // require() - импорт 

console.log(path.basename(__filename)); //название файла

console.log(path.dirname(__filename));// папка

console.log(path.extname(__filename)); //расширения

console.log(path.parse(__filename)); //парсинг инфы о текущем файле в виде объекта
console.log(path.parse(__filename).ext); //только расширение файла

console.log(path.join(__dirname, 'test', 'second.html')) //join - генерация пути для файла

console.log(path.resolve(__dirname, './test', 'second.html'));
// ./относительный путь
// / абсолютный путь