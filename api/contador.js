const contadores = {};

export default function handler(req, res) {
  const { user, action } = req.query;

  if (!user) {
    return res.status(200).send("falta usuario");
  }

  if (action === "add") {
    contadores[user] = (contadores[user] || 0) + 1;
    return res.status(200).send(
      `${user} tiene ${contadores[user]} anotacion/es`
    );
  }

  if (action === "ver") {
    const total = contadores[user] || 0;
    return res.status(200).send(
      `${user} tiene ${total} anotacion/es`
    );
  }

  if (action === "reset") {
    contadores[user] = 0;
    return res.status(200).send(
      `Anotaciones de ${user} reiniciadas`
    );
  }

  return res.status(200).send("accion no valida");
}
