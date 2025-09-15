import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 30,
      required: true,
    },
    description: {
      type: String,
      minLength: 3,
      maxLength: 1000,
      default:
        "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    },
    image: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
    iconPack: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ServiceModel =
  mongoose.models.Service || mongoose.model("Service", schema);

export default ServiceModel;
