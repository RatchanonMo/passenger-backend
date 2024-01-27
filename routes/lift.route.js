let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

//   User model
let LiftSchema = require("../models/Lift");

// Read User
router.route("/").get((req, res) => {
  LiftSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Edit schedule
router.route("/confirm-lift/:id").put((req, res, next) => {
  LiftSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
      }
    }
  );
});

  

module.exports = router;
