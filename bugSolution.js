const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... asynchronous operation to fetch user data ...
    const userData = await someAsyncOperation(userId); // Replace with actual async operation
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ error: 'Failed to fetch user data' });
  }
});

//Example Async Operation (Replace with your actual async operation)
function someAsyncOperation(userId) {
  return new Promise((resolve, reject) => {
    //Simulate an error 50% of the time
    if(Math.random() < 0.5){
        reject(new Error('Failed to fetch user'));
    }
    setTimeout(() => {
      resolve({ userId });
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});