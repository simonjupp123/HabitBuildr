# HabitBuildr

A modern, full-stack todo application built with Next.js, TypeScript, and PostgreSQL. This project demonstrates professional web development practices and is perfect for showcasing on your resume.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Database Integration**: PostgreSQL with connection pooling
- **RESTful API**: Complete CRUD operations for todos
- **Real-time Updates**: Optimistic UI updates with error handling
- **Responsive Design**: Beautiful, mobile-friendly interface
- **Type Safety**: Full TypeScript implementation
- **Professional Architecture**: Clean separation of concerns

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Database Driver**: `pg` (node-postgres)
- **Development**: ESLint, TypeScript compiler

## 📋 Todo Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Set priority levels (Low, Medium, High)
- ✅ Add due dates with overdue highlighting
- ✅ Filter todos (All, Active, Completed)
- ✅ Inline editing with form validation
- ✅ Responsive design for all devices
- ✅ Loading states and error handling

## 🚀 Getting Started

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

## 📁 Project Structure

```
HabitBuildr/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   └── todos/         # Todo API endpoints
│   │   └── page.tsx           # Main page
│   ├── components/             # React components
│   │   ├── AddTodoForm.tsx    # Todo creation form
│   │   ├── TodoItem.tsx       # Individual todo item
│   │   └── TodoList.tsx       # Main todo list component
│   ├── lib/                   # Utility libraries
│   │   ├── db.ts             # Database connection
│   │   ├── schema.sql        # Database schema
│   │   └── todoService.ts    # Database operations
│   └── types/                 # TypeScript type definitions
│       └── todo.ts           # Todo interface types
├── public/                    # Static assets
└── README.md                 # This file
```

## 🔧 API Endpoints

### Todos
- `GET /api/todos` - Get all todos (with optional `completed` filter)
- `POST /api/todos` - Create a new todo
- `GET /api/todos/[id]` - Get a specific todo
- `PUT /api/todos/[id]` - Update a todo
- `DELETE /api/todos/[id]` - Delete a todo
- `PATCH /api/todos/[id]/toggle` - Toggle todo completion

## 🎨 Key Features Explained

### Database Design
- **Connection Pooling**: Efficient database connections with `pg` Pool
- **Indexes**: Optimized queries with strategic indexing
- **Triggers**: Automatic timestamp updates
- **Constraints**: Data integrity with CHECK constraints

### Frontend Architecture
- **Component Composition**: Reusable, modular components
- **State Management**: React hooks for local state
- **Error Handling**: Comprehensive error states and user feedback
- **Type Safety**: Full TypeScript implementation

### API Design
- **RESTful**: Standard HTTP methods and status codes
- **Error Handling**: Proper error responses with meaningful messages
- **Validation**: Input validation and sanitization
- **Type Safety**: TypeScript interfaces for request/response

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
- **Railway**: Great for full-stack apps with PostgreSQL
- **Netlify**: Frontend deployment with serverless functions
- **Heroku**: Traditional hosting with PostgreSQL add-on

## 📝 Resume Highlights

This project demonstrates:
- **Full-Stack Development**: Frontend and backend implementation
- **Database Design**: PostgreSQL schema design and optimization
- **API Development**: RESTful API with proper error handling
- **Modern JavaScript**: ES6+ features and async/await
- **TypeScript**: Type safety and better developer experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Testing**: Error handling and edge cases
- **Version Control**: Git workflow and clean commit history

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for the deployment platform
- Tailwind CSS for the utility-first CSS framework
- PostgreSQL community for the robust database
