const fs = require('fs');
const path = require('path');

// лучше использовать асинхронные методы, чтобы не блокировать потоки
// File System
// если у нас 1-параметр то мы можем не писать  скобки
// fs.mkdir(path.join(__dirname, 'notes'), err =>{ // конвенция,  всегда первый параметр - ошибка
//     if(err) throw err

//     console.log('папка была создана')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello, world',
//     err =>{
//         if(err) throw err
//         console.log("файл был создан")

//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'From append file',
//             err =>{
//                 if(err) throw err
//                 console.log("файл был изменен")
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'mynotes.txt'),
//                     'utf-8',
//                     (err, data) =>{
//                         if(err) throw err
//                         console.log(data)
//                     }
//                 )
//             }
//         )
//     }

// )

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if(err) throw  err
            

            console.log('файл переименован')
        
    }
)