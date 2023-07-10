const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./dbConfig.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Welcome to the Todo App server!!');
});

// GET ALL
server.get('/todos', async (req, res) => {
  try{
    const todos = await db('todos');
    res.status(200).json(todos);
  }
  catch(err){
    res.status(500).json({message: 'Failed to get todos'})
  }
});

// GET BY ID
server.get('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const currentTodo = await db('todos').where({ id });
    currentTodo.length === 0 ? res.status(404).json({message: 'Todo not found'}) : res.status(200).json(currentTodo);
  }
  catch(err){
    res.status(500).json({message: 'Failed to get a todo'})
  }
});

// UPDATE
server.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({message: 'Missing todo data. Must include a message in your request.'});
  }
  try{
    await db('todos').where({id}).update({message});
    res.status(200).json(data);
  }
  catch(err){
    res.status(500).json({message: 'Failed to create new todo'})
  }
});

// CREATE
server.post('/todos', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({message: 'Missing todo data. Must include a message in your request.'});
  }
  try{
    await db('todos').insert({message});
    res.status(201).json(data);
  }
  catch(err){
    res.status(500).json({message: 'Failed to create new todo'})
  }
});

// DELETE
server.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try{
    await db('todos').where({id}).del();
    res.status(200).json({message: 'Deleted successfully'});
  }
  catch(err){
    res.status(500).json({message: 'Failed to delete todo'})
  }
});

module.exports = server;
