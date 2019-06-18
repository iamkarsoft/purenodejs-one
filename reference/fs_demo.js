const fs = require('fs');
const path = require('path');


// creating a directory
fs.mkdir(path.join(__dirname,'/test'),{},function(err){
  if(err) throw err;
  console.log('Folder created');
});

//create and write to file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world',function(err){
  if(err) throw err;
  // file append
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),'hello world',function(err){
    if(err) throw err;
    console.log('File appended');
    });
  console.log('File created');
});

// reading file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
  if(err) throw err;
  console.log(data);
});


// rename
// // reading file
fs.rename(path.join(__dirname,'/test','hello.txt'),paht.join(__dirname,'/test',"helloworld.txt",(err,data)=>{
  if(err) throw err;
  console.log('File Renamed...');
});

