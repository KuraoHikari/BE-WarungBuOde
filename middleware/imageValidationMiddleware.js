import { StatusCodes } from "http-status-codes";

export default function imgValidate(req, res, next) {
  if (req.file) {
    if (!req.file.mimetype.match(/(png|jpg|jpeg|gif|bmp)$/)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "file must be an image" });
    } else {
      if (req.file.size >= 261120) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "max image size is 255kb" });
      } else {
        next();
      }
    }
  } else {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "file must be an image" });
  }
}
