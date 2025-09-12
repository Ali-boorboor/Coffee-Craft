import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    commenter: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentBody: {
      type: String,
      minLength: 3,
      default:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", schema);

export default CommentModel;
