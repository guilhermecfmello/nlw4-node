import { Router } from 'express';
import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";
import { SendMailController } from './controllers/SendMailController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.post("/sendMail", sendMailController.execute);

router.get("/surveys", surveysController.show);
router.get("/users", userController.show);
router.get("/helloWorld", (req, res, next) => {
  res.json({ msg : "Hello World!" });
});

router.get("/rodrigo2", (req, res, next) => {
  res.json({ msg : "Hello Rodrigo2!" });
});
// Html test
router.get("/usersHtml", (req, res, next) => {
  windows.location.href = '/index.html';
});

export { router };
