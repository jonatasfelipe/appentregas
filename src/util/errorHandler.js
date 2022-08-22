export function errorHandler(err, res) {
    if (err.message.includes("$")) {
        const [message, status] = err.message.split("$");
        return res.status(status).send(message);
    }

    return res.status(500).send("Server Error");
}
