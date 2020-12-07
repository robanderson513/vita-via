import { Document, model, Model, Schema } from "mongoose";

interface IUser extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  dob: string;
  number: string;
  email: string;
  address: string;
}

const UserSchema: Schema = new Schema({
  _id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String },
  number: { type: String },
  email: { type: String },
  address: { type: String },
});

const User: Model<IUser> = model("User", UserSchema);

export { IUser, User };
