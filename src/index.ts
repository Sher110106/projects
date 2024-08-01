import {Client} from 'pg';
const client=new Client({
    connectionString:"postgresql://learn_owner:x5pPKnwb1OGU@ep-green-thunder-a5bk6f64.us-east-2.aws.neon.tech/learn?sslmode=require"
})

async function createUserTable(){
    await client.connect();

    const result=await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)`)
console.log(result);
}
async function insertUserTable(){
    await client.connect();
    const result=await client.query(`
        INSERT INTO users(username,email,password)
        VALUES("sher","sjjsj","snsins")`)
console.log(result)
}
insertUserTable();
