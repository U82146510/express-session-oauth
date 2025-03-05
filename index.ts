import express,{type Application} from 'express';
import passport from './model/github_auth.ts';
import cors from 'cors';
import session from 'express-session';
import {connect_to_atlas} from './config/mongodb.ts';
import {file} from './routes/user_route.ts';
import {error_handler} from './error/error_handler.ts';

const app:Application = express();
const port:number=3000;

app.use(cors({methods:['GET','POST','PUT','DELETE']}))
app.use(express.json());
app.use(session({
    secret:"1",resave:false,saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());



app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
app.use('/',file);
app.use(error_handler);

const start = async()=>{
    try {
        await connect_to_atlas();
        app.listen(port,()=>console.log('Server ON'));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();