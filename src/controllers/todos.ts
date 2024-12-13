import  { Request, Response, NextFunction } from "express"
import { Todo } from '../models/todo'

const todos: Todo[] = []

interface CreateTodoRequest {
    task: string;
}

export const createTodo = (req: Request<{}, {}, CreateTodoRequest>, res: Response, next: NextFunction) => {
    try{
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString(), task)
        todos.push(newTodo)
        res.status(201).json({
            message: 'Created new todo',
            createTask: newTodo
        })
    } catch(error){
        next(error)
    }
}