function getList(req, res){
    res.json([{id: 1, name: "student"}]);
}

module.exports = {
    getList
}