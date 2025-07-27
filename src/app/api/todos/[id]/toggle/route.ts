import { NextRequest, NextResponse } from 'next/server';
import { TodoService } from '@/lib/todoService';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid todo ID' },
        { status: 400 }
      );
    }

    const todo = await TodoService.toggleTodo(id);
    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(todo);
  } catch (error) {
    console.error('Error toggling todo:', error);
    return NextResponse.json(
      { error: 'Failed to toggle todo' },
      { status: 500 }
    );
  }
} 