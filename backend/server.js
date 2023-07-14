const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Configure CORS to allow requests from localhost:3001
const corsOptions = {
  origin: 'http://localhost:3001',
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Define the user data
let usersData = [
  {
    id: "69d4993e-543a-43f0-893a-357d567ce716",
    age: 30,
    firstName: "Hendricks",
    lastName: "Dale",
    email: "hendricksdale@proflex.com"
  },
  {
    id: "35a0f6a7-d328-4506-98fa-bc48b8e57437",
    age: 30,
    firstName: "Mack",
    lastName: "Santana",
    email: "macksantana@proflex.com"
  },
  {
    id: "6df82086-4137-436c-894f-952311d68cdc",
    age: 40,
    firstName: "Stone",
    lastName: "Pollard",
    email: "stonepollard@proflex.com"
  }
];

// Get all users
app.get('/api/users', (req, res) => {
  res.json(usersData);
});

// Update a user
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  usersData = usersData.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        ...updatedUser
      };
    }
    return user;
  });

  res.json({ message: 'User updated successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});