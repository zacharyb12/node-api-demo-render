import jwt from "jsonwebtoken";

const secret = "QS8D6F08QS6F8QSDF67SD98F6SDF8SDF8"; // Idéalement depuis .env

export function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Token manquant" });

  // authHeader devrait être sous la forme "Bearer TOKEN"
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token manquant" });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // stocker les infos du token dans req.user
    next(); // laisser passer la requête
  } catch (err) {
    return res.status(401).json({ message: "Token invalide" });
  }
}
