const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/main.routes');
const app = express();
const fileUpload = require('express-fileupload');
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(process.env.API, router);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
