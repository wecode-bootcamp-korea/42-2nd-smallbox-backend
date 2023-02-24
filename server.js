require('dotenv').config();

const { createApp } = require('./app');
const AppDataSource = require('./models/dataSource');

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
      AppDataSource.destroy();
    });

  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}!!`);
  });
};

startServer();
