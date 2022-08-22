import EntregadorService from "../services/entregadorService.js";
import { errorHandler } from "../util/errorHandler.js";

class EntregadorController {
    async save(req, res) {
        try {
            const entregador = req.body;
            const id = await EntregadorService.save(entregador);
            return res.status(201).json({ id });
        } catch (error) {
            return errorHandler(error, res);
        }
    }

    async findAll(req, res) {
        const entregadores = await EntregadorService.findAll();
        return res.status(200).json(entregadores);
    }

    async findByUserWithEntregador(req, res) {
        const id = req.params.id;
        const entregador = await EntregadorService.findByUserWithEntregador(id);
        return res.status(200).json(entregador);
    }
}

export default new EntregadorController();
