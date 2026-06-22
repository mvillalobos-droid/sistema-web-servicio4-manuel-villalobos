const express = require('express');
const offerRoutes = require('./routes/offer.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/work-order-system', offerRoutes);

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Recurso no encontrado',
    data: {
      observation: 'La ruta solicitada no existe'
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
