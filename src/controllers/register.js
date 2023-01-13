//here calling the configuration of database to can using in the cotrollers, for make the consulting since here
const pool = require("../database/database");

async function newRegister(req, res) {
  const { name } = req.body;
  const newRegister = {
    name
  };
  await pool.query(
    "INSERT INTO register SET ?",
    [newRegister],
    (err, rows) => {
      if (!err) {
        return res.status(200).send({ success: "Create new register" });
      } else {
        console.log(err);
      }
    }
  );
}

module.exports = {
  newRegister
}
