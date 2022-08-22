export function userValidator(user) {
    const types = ["admin", "entregador", "empresa"];

    if (!user.login) {
        return "O campo usuário deve ser informado";
    }

    if (!user.password) {
        return "O campo senha deve ser informado";
    }

    if (!types.includes(user.type)) {
        return "O campo tipo deve ser informado com valores válidos";
    }
}
