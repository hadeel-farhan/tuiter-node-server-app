import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.userName = "SpaceX";
    newTuit.handle = "@spacex";
    newTuit.time = "2h";
    newTuit.image = "rocket.png";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.topic = "Space";
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits)
}

const deleteTuit = (req, res) => {
    const tuitId = req.params.tid;
    tuits = tuits.filter(tuit =>
        tuit._id !== tuitId);
    res.sendStatus(200);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        { ...tuits[tuitIndex], ...updates };
    res.sendStatus(200);


}



export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
