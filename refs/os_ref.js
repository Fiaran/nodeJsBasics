const os = require('os');

//Платформа
console.log(os.platform()); 

//архитектура
console.log(os.arch()); 

// Информация

console.log(os.cpus());

// Свободная память
console.log(os.freemem());

// сколько всего памяти

console.log(os.totalmem());

// Какая корневая директория
console.log(os.homedir());

// сколько система работает
console.log(os.uptime());
