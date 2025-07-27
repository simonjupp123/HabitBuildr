# HabitBuildr

A modern, full-stack todo application built with Next.js, TypeScript, and PostgreSQL.

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Database Driver**: `pg` (node-postgres)

## Todo Features

-  Create, read, update, and delete todos
-  Mark todos as complete/incomplete
-  Set priority levels (Low, Medium, High)
-  Add due dates with overdue highlighting
-  Filter todos (All, Active, Completed)
-  Inline editing with form validation
-  Responsive design for all devices
-  Loading states and error handling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd HabitBuildr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your database**
   
   Create a PostgreSQL database and run the schema:
   ```sql
   -- Create the database
   CREATE DATABASE habitbuildr;
   
   -- Connect to the database and run the schema
   -- (Copy the contents of src/lib/schema.sql)
   ```

4. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   DB_USER=your_postgres_user
   DB_HOST=localhost
   DB_NAME=habitbuildr
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.



## API Endpoints

### Todos
- `GET /api/todos` - Get all todos (with optional `completed` filter)
- `POST /api/todos` - Create a new todo
- `GET /api/todos/[id]` - Get a specific todo
- `PUT /api/todos/[id]` - Update a todo
- `DELETE /api/todos/[id]` - Delete a todo
- `PATCH /api/todos/[id]/toggle` - Toggle todo completion


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

