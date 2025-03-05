import { Router } from "express";
import passport from '../model/github_auth.ts';
import {login,dashboard,logout} from '../controllers/user_controller.ts';
import {authorization} from '../middleware/authorization.ts';

export const file:Router = Router();

file.get('/auth/github/callback',passport.authenticate('github', { failureRedirect: '/login' }),login);
file.get('/dashboard',authorization(),dashboard);
file.get('/logout',authorization(),logout);