
const fs =  require('fs');
const { json } = require('stream/consumers');

exports.writeTasksToFile = (data)=>{

    fs.writeFileSync('./../data/task.json' , JSON.stringify(data));

    return data;
}

exports.readTaskfromfile =()=>{

    if(!fs.existsSync('./../data/task.json')){

        this.writeTasksToFile([]);
    }

    const data = fs.readFileSync('./../data/task.json');

    return JSON.parse(data);


}