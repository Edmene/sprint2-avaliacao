const express = require("express");

const app = express();

//o body-parser já vem nativo no express, então não é necessário usá-lo
app.use(express.json());

app.listen(3000, () => console.log("Estou no ar"));