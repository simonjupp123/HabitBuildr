const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'habitbuildr',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432'),
});

async function setupDatabase() {
  try {
    console.log('🚀 Setting up HabitBuildr database...');
    
    // Read the schema file
    const schemaPath = path.join(__dirname, '../src/lib/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute the schema
    await pool.query(schema);
    
    console.log('✅ Database schema created successfully!');
    console.log('📊 Tables created:');
    console.log('   - todos (with indexes and triggers)');
    console.log('');
    console.log('🎉 Your HabitBuildr database is ready!');
    console.log('   You can now start the development server with: npm run dev');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    console.log('');
    console.log('💡 Make sure:');
    console.log('   1. PostgreSQL is running');
    console.log('   2. Database "habitbuildr" exists');
    console.log('   3. Your database credentials are correct');
    console.log('   4. You have the necessary permissions');
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run the setup
setupDatabase(); 