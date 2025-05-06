module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // o superior, para soportar las características más recientes de ECMAScript
    sourceType: "module", // Permitir import/export
  },
  env: {
    es2020: true, // o superior
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Si usas React
  ],
  rules: {
    // Aquí puedes agregar reglas personalizadas si lo necesitas
  },
};
