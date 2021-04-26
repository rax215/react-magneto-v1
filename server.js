const generator = require('./generator')
const express = require('express')
const fsprom = require('fs').promises
const fs = require('fs')
const app = express()
const port = 9000
const AdmZip = require('adm-zip')


app.get('/download', async(req,res) => {
    await fsprom.rmdir('./output', { recursive: true }).then(() => console.log('directory removed!'))
    await generator.reactGenerator()
    
    const projDir = __dirname+'/output/'
    let compName = ''
    fs.readdir(projDir, (err, files) => {
        files.forEach(file => {
          compName = file;
        });
    });
    
    const zip = new AdmZip()   
    zip.addLocalFolder(projDir, compName)

    const downloadName = 'download.zip'
    const data = zip.toBuffer();
    zip.writeZip(__dirname+'/'+downloadName)
    
    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${downloadName}`);
    res.set('Content-Length',data.length);
    res.send(data);
    
})

app.listen(port, () => console.log(`Server started on port ${port}`))