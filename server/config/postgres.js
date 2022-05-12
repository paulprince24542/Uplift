var { Sequelize } = require("sequelize");

async function initPostgres() {}
var sequelize = new Sequelize("uplift", "dedsec", "dedsec", {
  host: "localhost",
  dialect: "postgres",
});
module.exports.initPostgres = initPostgres;
module.exports.sequelize = sequelize;
