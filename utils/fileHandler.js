
const fs =  require('fs');
const { json } = require('stream/consumers');

exports.writeTasksToFile = (data)=>{

    fs.writeFileSync('./../data/task.json' , JSON.stringify(data));

    return data;
}

