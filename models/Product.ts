import mongoose, { Schema, model, Document } from 'mongoose';
import { customAlphabet } from 'nanoid';

// Create nanoid for short unique identifiers
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 8);

type ImageObject = {
  src: string;
  fileKey: string;
};

// Interface representing a Product document in MongoDB
export interface IProduct extends Document {
  restId: string;                // Unique identifier, URL-friendly
  name: string;                  // Product name
  description?: string;          // Optional description
  price: number;                 // Price in cents (or smallest currency unit)
  category?: string;             // Category name or ID
  stock?: number;                // Available stock count
  image: ImageObject;            // Main image
  gallery: ImageObject[];        // Additional images
  subproducts: string[];         // Array of restId references to related products
  createdAt: Date;               // Timestamp when created
  updatedAt: Date;               // Timestamp when last updated
}

// Mongoose schema definition for Product
const ProductSchema = new Schema<IProduct>(
  {
    restId: {
      type: String,
      default: () => nanoid(),
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      default: null,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    image: {
      src: { type: String, required: true, trim: true },
      fileKey: { type: String, required: true, trim: true },
    },
    gallery: {
      type: [
        {
          src: { type: String, required: true, trim: true },
          fileKey: { type: String, required: true, trim: true },
        }
      ],
      default: [],
    },
    subproducts: {
      type: [String],
      ref: 'Product',
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Export the Product model, reusing existing if already registered
export const Product = mongoose.models.Product || model<IProduct>('Product', ProductSchema);