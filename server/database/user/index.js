import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String},
        address: [{details: {type: String}, for: {type: String}}],
        phoneNumber: [{type: Number}]
    },
    {
        timestamps: true,
    }
);
 
// statics can be called directly. statics is available everywhere even when the process hasn't started yet.
UserSchema.statics.findByEmailAndPhone = async ({phoneNumber, email}) => {
    const checkByEmail = await UserModel.findOne({email});
    const checkByPhone = await UserModel.findOne({phoneNumber});

    if(checkByEmail || checkByPhone)
    {
        throw new Error("User already exist....");
    }

    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ password, email }) => {
    // check whether email exists
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User does not exist!!!");

    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) throw new Error("Invalid Password!!!");

    return user;
};

// methods have to be instantiated. methods are available only after the process has been started.
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
};

// pre- a predefined function which will run at a particular state when we perform a transaction(can be a new request) in mongoose.
// here that particular state is "save", I want to run it before saving data.
UserSchema.pre("save", function(next){
    const user = this;

    // checking if user entered password or not
    if(!user.isModified("password"))
     return next();

    //password bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error)
        return next(error);

        // hashing password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            //assigning hashed password
            user.password = hash;
            return next();
        });
    }); 
});

export const UserModel = mongoose.model("Users", UserSchema);




// next()- telling the mongoose to do its normal functioning after our function done processing