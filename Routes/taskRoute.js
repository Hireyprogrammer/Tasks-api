const { json } = require("stream/consumers");

const taskRoute = (req ,res)=>{

    if(req.method == 'GET'){

        res.end("Get ALl Task");
    }
    else if(req.method=='POST'){

        res.end('Create New Task')
    }
    else if(req.method == 'PATH'){

        res.end("Update The task");
    }
    else if(req.method == 'Delete'){

      res.end("Task is Deleted")
    }
    else{

        res.writeHead(404 , 'Not Found ' , {'content-type' : 'Application/json'})
    }
    // res.end(json.Strim)




}