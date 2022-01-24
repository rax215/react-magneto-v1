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

<<<<<<< HEAD
app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
=======
app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
>>>>>>> bc595f06f7d67c132833100b75d0d738ffb7393a
