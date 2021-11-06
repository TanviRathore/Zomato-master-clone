import googleOAuth from "passport-google-oauth20";
import { UserModel } from "../database/allmodel";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/google/callback"
        },

        async (accessToken, refreshToken, profile, done) => {

            // creating new user object
            const newUser = {
                fullName: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value,
            };

            try{

                // checking if user exist
                const user = await UserModel.findOne({email: newUser.email})

                if(!user){
                    // creating new user
                    const user = UserModel.create(newUser);

                    // generate token
                    const token = user.generateJwtToken();

                    // returning user
                    done(null, {user, token});
                }else{

                    //generate token
                    const token = user.generateJwtToken();

                    // returning user
                    done(null, {user, token});
                }

            }catch(error){
                done(error, null);
            }

        }
        
        )
    );
    passport.serializeUser((userData, done) => done(null, { ...userData }));
    passport.deserializeUser((id, done) => done(null, id));
};



// done(null, {something})-> null means we don't want google to do anything and if don't pass null then 2nd one will be considered as 1st parameter