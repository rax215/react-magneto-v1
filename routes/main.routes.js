const express = require('express');
const commonUtil = require('../commonUtil');
var router = express.Router();
const generator = require('../generator');
const fsprom = require('fs').promises;
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

router.get('/', (req, res) => {
  res.status(200).send('this is magneto api');
});

router.post('/generateReactApp', async (req, res) => {
  const masterLayout = await commonUtil.createMasterJson(req.body);
  if (fs.existsSync('./output')) {
    await fsprom.rm('./output', { recursive: true }).then(() => console.log('directory removed!'));
  }
  await generator.reactAppGenerator(masterLayout);
  const projDir = path.join(__dirname, '..', 'output');

  let compName = '';
  fs.readdir(projDir, (err, files) => {
    files.forEach(file => {
      compName = file;
    });
  });

  const zip = new AdmZip();
  zip.addLocalFolder(projDir, compName);

  const downloadName = 'download.zip';
  const data = zip.toBuffer();
  zip.writeZip(projDir + downloadName);

  res.set('Content-Type', 'application/octet-stream');
  res.set('Content-Disposition', `attachment; filename=${downloadName}`);
  res.set('Content-Length', data.length);
  res.status(200).send(data);
});

router.get('/template', (req, res) => {
  try {
    res.download(`${__dirname}/../template/react_template.xlsx`);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/upload', (req, res) => {
  try {
    if (!req.files) {
      res.status(400).send({
        message: 'No file uploaded',
      });
    } else if (req.files.template.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      res.status(400).send({
        message: 'Unsupported File',
      });
    } else {
      //Use the name of the input field (i.e. "template") to retrieve the uploaded file
      const template = req.files.template;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      template.mv(`${__dirname}/../uploads/react_template.${template.name.split('.')[1]}`);

      //send response
      res.send({
        message: 'File uploaded',
        data: {
          name: template.name,
          mimetype: template.mimetype,
          size: template.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/download', async (req, res) => {
  try {
    await fsprom.rmdir(`${__dirname}/../output`, { recursive: true }).then(() => console.log('directory removed!'));
    await generator.reactGenerator();

    const projDir = `${__dirname}/../output`;
    let compName = '';
    fs.readdir(projDir, (err, files) => {
      files.forEach((file) => {
        compName = file;
      });
    });

    const zip = new AdmZip();
    zip.addLocalFolder(projDir, compName);

    const downloadName = 'download.zip';
    const data = zip.toBuffer();
    // zip.writeZip(__dirname + '/' + downloadName);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${downloadName}`);
    res.setHeader('Content-Length', data.length);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = router;
