const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

class SessionController {
  async store(req, res) {
    const { user, password } = req.body;

    if (user === "numenu" && password === "123123") {
      const token = await jwt.sign({ user }, authConfig.secret, {
        expiresIn: authConfig.ttl
      });

      return res.json({ token });
    } else {
      return res.status(400).json({ error: "Usuário e senha inválidos" });
    }
  }
}

module.exports = new SessionController();
