module.exports = (app) => {
  app.get('/api/bicycles', (req, res) => {
    res.send({ get: 'show all items' });
  });

  app.get('/api/bicycle/:id', (req, res) => {
    res.send({ get: 'show single item' });
  });

  app.post('/api/bicycle', (req, res) => {
    res.send({ post: 'add item' });
  });

  app.put('/api/bicycle/:id', (req, res) => {
    res.send({ put: 'edit item' });
  });

  app.delete('/api/bicycle/:id', (req, res) => {
    res.send({ delete: 'delete item' });
  });
};
