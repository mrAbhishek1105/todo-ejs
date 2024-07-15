// import express from "express";
// import bodyParser from "body-parser";
import Todo from "../db/models/todos.js";


// const router = express.Router();

// router.get('/',async(req,res)=>{
//     const todos = await Todo.find();
//     res.render('index',{todos:todos});
// })

// router.post('/addtodo',async(es,res)=>{
//     const newtodo = new Todo({
//         todo: req.body.todo,
//         complete:false
//     });
//     await newtodo .save();
//     res.redirect('/');
// })


// router.post('/complete-todo', async (req, res) => {
//     const todoId = req.body.todoId;
//     await Todo.findByIdAndUpdate(todoId, { complete: true });
//     res.redirect('/');
// });

// router.post('/delete-todo', async (req, res) => {
//     const todoId = req.body.todoId;
//     await Todo.findByIdAndRemove(todoId);
//     res.redirect('/');
// });

// export default router;


import express from "express";
// import Todo from "../db/models/todo.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos: todos });
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).send('Error fetching todos');
    }
});

router.post('/addtodo', async (req, res) => {
    try {
        const newTodo = new Todo({
            todo: req.body.todo,
            complete: false
        });
        await newTodo.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error adding todo:', error);
        res.status(500).send('Error adding todo');
    }
});

router.post('/complete-todo', async (req, res) => {
    try {
        const todoId = req.body.todoId;
        await Todo.findByIdAndUpdate(todoId, { complete: true });
        res.redirect('/');
    } catch (error) {
        console.error('Error completing todo:', error);
        res.status(500).send('Error completing todo');
    }
});

router.post('/delete-todo', async (req, res) => {
    try {
        const todoId = req.body.todoId;
        await Todo.findByIdAndDelete(todoId);
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).send('Error deleting todo');
    }
});

export default router;
