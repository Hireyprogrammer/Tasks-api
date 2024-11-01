const { readTasksFromFile } = require("../utils/fileHandler");


exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))
}



exports.createTask(req ,res) = {
    
}

exports.updateTask(req ,res) = {
    
}

exports.deleteTask(req ,res) = {
    
}