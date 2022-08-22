class TextoInicial {
    print(req, res) {
        var txt = ["Aplicação Iniciada Com Sucesso!"];
        return res.status(200).json(txt);
    }
}

export default new TextoInicial();
