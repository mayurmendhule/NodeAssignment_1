const { rejects } = require('assert')
const { resolve } = require('path')
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	return new Promise((resolve, reject) =>{
		fs.appendFile(fileName,fileContent, (error) =>{
			if(error){
				reject("error");
			}
			resolve();
		})
		resolve(console.log("New file is created"))
	})	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject) =>{
		fs.appendFile(fileName,fileContent, (error)=>{
			if(error){
				reject(error);
			}
			resolve();
		})
		resolve(console.log(fileContent))
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.appendFile(fileName,fileContent,(error)=>{
			if(error){
				reject(error);
			}
			resolve();
		})
		resolve(console.log(fileContent));
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject)=>{
		fs.unlink(fileName,(error)=>{
			if(error){
				reject(error);
			}
			resolve();
		})
		resolve(console.log(`${fileName} is deleted`));
	})
}
myFileWriter('data.txt',"Hello");
// myFileReader('data.txt');
// myFileUpdater('data.txt', "world!");
// myFileDeleter('data.txt');

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }