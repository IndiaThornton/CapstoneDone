const sneaks = require('./db.json');


globalId = 3;

module.exports = {
    getsneaks: (req, res) => {
      res.status(200).send(sneaks);
    },
    createsneak: (req, res) => {
      let { shoe, image } = req.body;
      console.log(req.body)
      let newsneak = {
        id: globalId,
        shoe: shoe,
        image: image,
      };
      sneaks.push(newsneak);
      res.status(200).send(sneaks);
      globalId++;
    },
  };


 