import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image"

inquirer.prompt([{
    message: "Hello! Enter a link: ", 
    name:"URL"
}])

.then((response) => { 
    const url = response.URL 
    var qr_img = qr.image(url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url, (err) => {
      console.log("Saved.");
    });
})


