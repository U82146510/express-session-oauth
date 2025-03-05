import { Strategy as GitHubStrategy } from "passport-github2";
import passport from "passport";
import dotenv from "dotenv";
import { Profile } from "passport-github2";
import { User, IUser } from "../model/User";

dotenv.config();

const client_id = 
const client_secret =

if (!client_id || !client_secret) {
  throw new Error("Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET in .env");
}


passport.use(
  new GitHubStrategy(
    {
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: Express.User) => void
    ) => {
      try {
        let userDoc = await User.findOne({ githubid: profile.id });

        if (!userDoc) {
          userDoc = await User.create({
            githubid: profile.id,
            username: profile.username,
            avatar: profile.photos?.[0]?.value,
            profileUrl: profile.profileUrl,
            provider: profile.provider,
            displayName: profile.displayName,
          });
        }

        const user = userDoc.toObject() as IUser; 
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);


passport.serializeUser((user: Express.User, done) => {
  const typedUser = user as IUser;
  done(null, typedUser.githubid);
});


passport.deserializeUser(async (id: string, done) => {
  try {
    const userDoc = await User.findOne({ githubid: id });

    if (!userDoc) {
      return done(new Error("User not found"));
    }

    const user = userDoc.toObject() as IUser;
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

export default passport;
