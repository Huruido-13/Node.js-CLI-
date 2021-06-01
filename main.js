const program = require("commander");
const fs = require("fs");
const markdownToMarkup = require("./md2html");
program.option("--gfm", "GFMを有効にする");

program.parse(process.argv);
const options = program.opts();
const cliOptions = {
    gfm: options.gfm??false,
};
console.log(cliOptions.gfm);
//program.argsはprogram.argv[2]から配列に入れられる
const filePath = program.args[0];
console.log(filePath);

fs.readFile(filePath, {encoding:"utf8"}, (err, file) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
        return
    }
    console.log(markdownToMarkup(file,cliOptions));})