const bcrypt = require("bcryptjs");
const User = require("../models/user");
const {
  SUCCESS_CODE,
  CREATED_CODE,
  BAD_REQUEST_ERROR,
  UNAUTHORIZED_ERROR,
  NOT_FOUND_ERROR,
  CONFLICT_ERROR,
  DEFAULT_SERVER_ERROR,
} = require("../utils/errors");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(SUCCESS_CODE).send(users))
    .catch((err) => {
      console.error(err);
      return res
        .status(DEFAULT_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

const createUser = (req, res) => {
  const { name, avatar, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      return User.create({
        name,
        avatar,
        email,
        password: hashedPassword,
      });
    })
    .then((user) => {
      const userResponse = user.toObject();
      delete userResponse.password;

      res.status(CREATED_CODE).send(userResponse);
    })
    .catch((err) => {
      console.error(err);

      if (err.code === 11000) {
        return res
          .status(CONFLICT_ERROR)
          .send({ message: "A user with this email already exists." });
      }

      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST_ERROR).send({ message: err.message });
      }

      return res
        .status(DEFAULT_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

const getUser = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail()
    .then((user) => res.status(SUCCESS_CODE).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND_ERROR).send({ message: "User not found" });
      }
      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST_ERROR)
          .send({ message: "Invalid user ID format" });
      }
      return res
        .status(DEFAULT_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

module.exports = { getUsers, createUser, getUser };
