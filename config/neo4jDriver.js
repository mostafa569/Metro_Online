const neo4j = require('neo4j-driver');
let driver;

exports.initDriver= async function(){

 driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'mostafa123') , {
    database: "stations"

 });
// await driver.getServerInfo();
return driver;
}

exports.getDriver = function(){
    return driver
  }
  