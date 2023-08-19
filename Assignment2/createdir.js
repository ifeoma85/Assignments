const fs = require('fs');
const path = require('path');

// Create a folder
const newFolderPath = path.join(__dirname, 'folder', 'Students')
fs.mkdir(newFolderPath, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder created successfully')
})

//create a file
const newFilePath = path.join(__dirname, 'files', 'user.js')
fs.mkdir(newFilePath, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File created successfully')
})


//Rename a folder
const Students = path.join(__dirname, 'Names')
fs.rename(newFolderPath, Students, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder  renamed successfully')
}) 

//write to a file

let myName = 'Ifeoma Ugwu'
let moreDetails = `Age: 30\n Sex: female\n PhoneNumber: 08067884380\n Role: Backend Engineer`
function reWriteToFile() {
    writeFile(join(newFolderPath, 'user.js'), myName, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File written successfully!')

    });
}
console.log(reWriteToFile())

function appendToFile() {
    appendFile(join(newFolderPath, 'user.js'), moreDetails, err => {
        if (err) {
            console.log(err);
        }
        console.log('File appended successfully!')

    })
}
console.log(appendToFile())


// Rename a file
const user = path.join(__filename, 'file', 'Ifeoma_Ugwu')
fs.rename(newFilePath, user, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File renamed successfully')
}) 


// // Opening a file asynchronously for reading
fs.open(newFilePath, 'Ifeoma_Ugwu', (err, fd) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File opened successfully')
//   After opening, you can do any operation on the file, like reading, writing, appending, etc.
//   Reading a file
    
    fs.readFile(fd, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('File read successfully')
        console.log(data)
    })
})

// deleting a file
function deleteFile() {
    unlink(join(newFilePath, 'Ifeoma_Ugwu.js'), (err) => {
        if (err) throw err;
        console.log('File deleted successfully')

    })
}
console.log(deleteFile())


// Delete a folder
fs.rmdir(Names, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder deleted successfully')
})