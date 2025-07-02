import authService from "../services/auth.service.js";

const authController = {
  login: async (req, res) => {
    const  username = req.body.username;
    const password = req.body.password;

    try {
      const token = await authService.login(username, password);
      if (!token) {
        return res.status(401).json({ message: "Identifiants invalides" });
      }

      res.status(200).json({ token });
    } catch (err) {
      console.error("Erreur dans authController.login:", err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
};

export default authController;
