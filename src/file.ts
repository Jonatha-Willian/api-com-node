import { readFile, writeFile } from "fs/promises";

const exec = async () => { 
    const fileName = './teste.txt'
    const fileContent = await readFile(fileName,{encoding: 'utf8'});
    const list = fileContent.split("\n");
    list.push('Fulano');
    const listTxt = list.join("\n");
    await writeFile(fileName, listTxt)}

exec()