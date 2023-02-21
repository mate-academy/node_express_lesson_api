import express from "express";
import cors from 'cors';

const PORT = 5000;

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

const app = express();

app.use(cors())

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/colors', (req, res) => {
  res.send(colors)
})

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const user = users.find((user) => user.id === +userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user)
})

app.post('/users', express.json(), (req, res) => {
  const { name, carColorId } = req.body;
  const isDataValid = !(
    !name
    || !carColorId
    || typeof name !== 'string'
    || typeof carColorId !== 'number'
  )

  if (!isDataValid) {
    res.sendStatus(422);

    return;
  }

  const maxId = users.length
    ? Math.max(...users.map(({ id }) => id))
    : 0;

  const newUser = {
    id: maxId + 1,
    name,
    carColorId,
  }

  users.push(newUser);

  res.status(201);
  res.send(newUser);
})

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`)
})
