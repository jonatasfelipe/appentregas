import userRepo from "../repositories/userRepo.js";
import { userValidator } from "../validators/users.js";

class UserService {
    async save(user) {
        this.validateUser(user);
        await this.validateLogin(user.login);

        const id = await userRepo.save(user);
        return id;
    }

    async findAll() {
        const users = await userRepo.findAll();
        return users;
    }

    async validateLogin(login) {
        const userExists = await userRepo.findByLogin(login);
        if (userExists) {
            throw new Error("Usuário já está em uso! $409");
        }
    }

    validateUser(user) {
        const erros = userValidator(user);

        if (erros) {
            throw new Error(`${erros}. $422`);
        }
    }
}

export default new UserService();
