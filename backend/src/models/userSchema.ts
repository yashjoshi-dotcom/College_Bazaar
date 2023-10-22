// userSchema.ts
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// The following code sets the schema for the vaious fields that are required from the end user while registering and the type of each of this fieldd.

interface IUser extends mongoose.Document {
  name: string;
  email_id: string;
  college_name: string;
  password: string;
  blacklisted: boolean;
  admin: boolean;
  wishlist: string[];
  tokens: { token: string }[];
  list: {
    item_name: string;
    item_price: number;
    item_age: number;
    item_condition: number;
    item_image: string;
    item_tag:
      | 'Others'
      | 'Clothing_essentials'
      | 'Books'
      | 'Daily-use'
      | 'Sports'
      | 'Stationary';
    item_description: string;
    item_status: 'under_approval' | 'approved' | 'deleted' | 'blacklisted';
  }[];
  generateAuthToken(): Promise<string>;
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    default: 'Delhi Technological University',
  },
  password: {
    type: String,
    required: true,
  },
  blacklisted: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  wishlist: [String],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  list: [
    {
      item_name: {
        type: String,
      },
      item_price: {
        type: Number,
      },
      item_age: {
        type: Number,
      },
      item_condition: {
        type: Number,
      },
      item_image: {
        type: String,
      },
      item_tag: {
        type: String,
        enum: [
          'Others',
          'Clothing_essentials',
          'Books',
          'Daily-use',
          'Sports',
          'Stationary',
        ],
      },
      item_description: {
        type: String,
      },
      item_status: {
        type: String,
        enum: ['under_approval', 'approved', 'deleted', 'blacklisted'],
      },
    },
  ],
});

// Hashing the password (middle ware function {pre : ensures that the function is called before save on auth.js file})
userSchema.pre('save', async function (next) {
  // This ensures that we are not hashing password repeatedly by ensuring that hash is only called when password field is modified
  if (this.isModified('password')) {
    // This ensures the password is being hashed and number of hashing rounds =10.
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Generating JWT Token
userSchema.methods.generateAuthToken = async function () {
  try {
    // const token_ = String(jwt.sign({ _id: this._id }, `${process.env.JWT_KEY}`));
    // // Here token_ is the value derrived from above line whereas token refers to the one present in userSchema
    // this.tokens.push({ token: token_ });

    const token_ = String(
      jwt.sign({ _id: this._id }, `${process.env.JWT_KEY}`)
    );
    const token = { token: token_ };
    this.tokens.push(token);

    await this.save();

    return token_;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model<IUser>('Main_Collection', userSchema);
export default User;
