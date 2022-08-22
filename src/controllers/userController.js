import UserService from "../services/userService.js";
import { errorHandler } from "../util/errorHandler.js";

class UserController {
    async save(req, res) {
        try {
            const user = req.body;
            const id = await UserService.save(user);

            return res.status(201).json({ id });
        } catch (error) {
            return errorHandler(error, res);
        }
    }

    async findAll(req, res) {
        const users = await UserService.findAll();
        return res.status(200).json(users);
    }
}

export default new UserController();
