import { NextRequest, NextResponse } from 'next/server';
import { TodoService } from '@/lib/todoService';
import { CreateTodoRequest } from '@/types/todo';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const completed = searchParams.get('completed');
    
    let todos;
    if (completed !== null) {
      todos = await TodoService.getAllTodos(completed === 'true');
    } else {
      todos = await TodoService.getAllTodos();
    }

    return NextResponse.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateTodoRequest = await request.json();
    
    if (!body.title || body.title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    const todo = await TodoService.createTodo(body);
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    console.error('Error creating todo:', error);
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
} 