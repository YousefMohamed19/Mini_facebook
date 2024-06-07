//import module
import express from 'express'; 
import { connectDB, sequelize } from './db/connection.js';
import { userRouter } from './src/modules/users/routes/user.router.js';
import { postRouter } from './src/modules/posts/routers/posts.routers.js';
import { commentRouter } from './src/modules/comments/routers/comment.router.js';
import { specialRouter } from './src/modules/special/routers/special.router.js';


//create server 
const app = express();
const port = 3000;
app.use(express.json());

connectDB();

sequelize.sync();


//routes
app.use('/users',userRouter);
app.use('/posts',postRouter);
app.use('/comments',commentRouter);
app.use('/special',specialRouter);


//listen server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})