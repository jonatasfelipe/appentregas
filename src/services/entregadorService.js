import entregadorRepo from "../repositories/entregadorRepo.js";

class EntregadorService {
    async save(entregador) {
        await this.validateCpfCnpj(entregador.cpfCnpj);
        await this.validateEmail(entregador.email);

        const id = await entregadorRepo.save(entregador);
        return id;
    }

    async findAll() {
        const entregadores = await entregadorRepo.findAll();
        return entregadores;
    }

    async findByUserWithEntregador(id) {
        const entregador = await entregadorRepo.findByUserWithEntregador(id);
        return entregador;
    }

    async findByCpfCnpj(cpfCnpj) {
        const entregador = await entregadorRepo.findByCpfCnpj(cpfCnpj);
        return entregador;
    }

    async validateEmail(email) {
        const entregador = await entregadorRepo.findByEmail(email);
        if (entregador) {
            throw new Error("E-mail já está em uso! $409");
        }
    }

    async validateCpfCnpj(cpfCnpj) {
        const entregador = await entregadorRepo.findByCpfCnpj(cpfCnpj);
        if (entregador) {
            throw new Error("Cpf/Cnpj já está em uso! $409");
        }
    }
}

export default new EntregadorService();
