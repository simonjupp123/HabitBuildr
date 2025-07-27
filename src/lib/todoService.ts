import pool from './db';
import { Todo, CreateTodoRequest, UpdateTodoRequest } from '@/types/todo';

export class TodoService {
  // Get all todos with optional filtering
  static async getAllTodos(completed?: boolean): Promise<Todo[]> {
    let query = 'SELECT * FROM todos ORDER BY created_at DESC';
    let params: any[] = [];

    if (completed !== undefined) {
      query = 'SELECT * FROM todos WHERE completed = $1 ORDER BY created_at DESC';
      params = [completed];
    }

    const result = await pool.query(query, params);
    return result.rows;
  }

  // Get a single todo by ID
  static async getTodoById(id: number): Promise<Todo | null> {
    const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    return result.rows[0] || null;
  }

  // Create a new todo
  static async createTodo(todoData: CreateTodoRequest): Promise<Todo> {
    const { title, description, priority = 'medium', due_date } = todoData;
    
    const query = `
      INSERT INTO todos (title, description, priority, due_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    
    const result = await pool.query(query, [title, description, priority, due_date]);
    return result.rows[0];
  }

  // Update a todo
  static async updateTodo(id: number, todoData: UpdateTodoRequest): Promise<Todo | null> {
    const fields = [];
    const values = [];
    let paramCount = 1;

    if (todoData.title !== undefined) {
      fields.push(`title = $${paramCount}`);
      values.push(todoData.title);
      paramCount++;
    }

    if (todoData.description !== undefined) {
      fields.push(`description = $${paramCount}`);
      values.push(todoData.description);
      paramCount++;
    }

    if (todoData.completed !== undefined) {
      fields.push(`completed = $${paramCount}`);
      values.push(todoData.completed);
      paramCount++;
    }

    if (todoData.priority !== undefined) {
      fields.push(`priority = $${paramCount}`);
      values.push(todoData.priority);
      paramCount++;
    }

    if (todoData.due_date !== undefined) {
      fields.push(`due_date = $${paramCount}`);
      values.push(todoData.due_date);
      paramCount++;
    }

    if (fields.length === 0) {
      return this.getTodoById(id);
    }

    values.push(id);
    const query = `
      UPDATE todos 
      SET ${fields.join(', ')}
      WHERE id = $${paramCount}
      RETURNING *
    `;

    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  // Delete a todo
  static async deleteTodo(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING id', [id]);
    return (result.rowCount || 0) > 0;
  }

  // Toggle todo completion status
  static async toggleTodo(id: number): Promise<Todo | null> {
    const query = `
      UPDATE todos 
      SET completed = NOT completed 
      WHERE id = $1 
      RETURNING *
    `;
    
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  }

  // Get todos by priority
  static async getTodosByPriority(priority: 'low' | 'medium' | 'high'): Promise<Todo[]> {
    const result = await pool.query(
      'SELECT * FROM todos WHERE priority = $1 ORDER BY created_at DESC',
      [priority]
    );
    return result.rows;
  }

  // Get overdue todos
  static async getOverdueTodos(): Promise<Todo[]> {
    const result = await pool.query(
      'SELECT * FROM todos WHERE due_date < CURRENT_DATE AND completed = false ORDER BY due_date ASC',
      []
    );
    return result.rows;
  }
} 