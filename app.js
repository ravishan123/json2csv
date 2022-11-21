const { Parser } = require('json2csv');
const fs = require("fs");
const axios = require('axios');


const authToken ="WyIweDQyNTI5NzEzNTdjMzA5NDM3MGMwYzZkNmNhNzI4NmQzMjJiZWQ1Nzc5NTE1YjQ0NDJmZTBlYTM1MzE1NDFlYzU2ZWJmYmYzM2Y0OGIwMzRlYTQwZjI0Y2YwNmI4ZWExZGU2MTk4YmI4MTkxZjQ2NWQwMjc4ODRkOTMwZWQ5NGU3MWMiLCJ7XCJpYXRcIjoxNjY5MDA5Nzk5LFwiZXh0XCI6MTY2OTYxNDU5OSxcImlzc1wiOlwiZGlkOmV0aHI6MHhEMTgxNjkwOWYxMDc1NDQxOUI0NzcxMkUwQWZBMkQyQWFlYzgyYmZlXCIsXCJzdWJcIjpcIlJIdDdJVDlZakFzU0k1ZnUtak8tRzJybnNzSHdaQmFjQWV2cmpIOXFCNVE9XCIsXCJhdWRcIjpcIl9BRzM4XzJRWExNQnVHRTRJV3FqQjF0dTE2TUc1bzdQVmpyZERYaThPVmM9XCIsXCJuYmZcIjoxNjY5MDA5Nzk5LFwidGlkXCI6XCI0MDk0NjE5Ny05ZGZjLTRiYzgtOGExNi05YjMxOWI4MDNjM2FcIixcImFkZFwiOlwiMHhmZmNhYjJmNDZjNWUwYWM3MDY1NDFiMmJlZGYyYzE3M2RlYWIxN2I4MzE5N2RjNDk2NDVhMjg0M2VkNjhjZWIxMjE5ZWU5ODhlMjliNTQxNjM0ZWQ3MzQwMmYxZTU5YWZhMzljN2Q5YzM2Y2UyN2ZjMTg2Y2IyYTBiYTEzZTM2NTFjXCJ9Il0="

const options = {
    method: 'GET',
    url: 'https://api.brella.io/api/events/TechinAsia2022/attendees?ignore_networking=false&order=&page[number]=1&page[size]=5000&search=&api_version=application%2Fvnd.brella.v4%2Bjson',

     headers: {
        "accept": "application/vnd.brella.v4+json",
        "accept-language": "en-US,en;q=0.9",
        "authorization":authToken,
        "brella-organization-slug": "techinasia",
    }
  };

console.log("loading data.... ⏳⌛️⏳⌛️⏳⌛️")
axios.request(options).then(function (response) {
const json2csvParser = new Parser();
const csv = json2csvParser.parse(response.data.data);
    fs.writeFileSync("convertedData.csv", csv);
    console.log("Done ✅ ✅ ✅ ✅ ");
 
}).catch(function (error) {
    console.error("❌❌❌❌❌❌❌❌");
    console.error(error);


});

