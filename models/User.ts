import mongoose, { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { customAlphabet } from 'nanoid';
import { UserRole } from '@/types/types';

// Create nanoid for short unique identifiers
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 8);

// Interface representing a User document in MongoDB
export interface IUser extends Document {
  restId: string;          // Unique identifier for the user, user-friendly for URLs
  role: UserRole;          // Role of the user (user or admin)
  fullname: string;        // Full name of the user
  email: string;           // Email address
  password: string;        // Hashed password
  cart: string[];          // Array of product IDs in the shopping cart
  saved: string[];         // Array of saved product IDs
  createdAt: Date;         // Timestamp when the document was created
  updatedAt: Date;         // Timestamp when the document was last updated
}

// Mongoose schema definition for the User
const UserSchema = new Schema<IUser>(
  {
    restId: {
      type: String,
      default: () => nanoid(),
      unique: true,
      index: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    cart: {
      type: [String],
      ref: 'Product',
      default: [],
    },
    saved: {
      type: [String],
      ref: 'Product',
      default: [],
    },
  },
  {
    timestamps: true,       // Automatically manage createdAt and updatedAt fields
    versionKey: false,      // Disable __v version key
  }
);

// Hash password before saving
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create and export the Mongoose model, reusing existing if already registered
export const User = mongoose.models.User || model<IUser>('User', UserSchema);