
var data = [{id: 1, name: "teacher"}];

function getList(req, res){
    res.json(data);
}

function add(req, res){
    const body = req.body;
    data.push(body);
    return body;
}

function update(req, res){
    const id = req.params.id
    const body = req.body;
    return body;
}

module.exports = {
    getList, 
    add,
    update
}