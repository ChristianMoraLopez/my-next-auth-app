import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Configuración de autenticación por credenciales
      async authorize(credentials) {
        // Verifica las credenciales y devuelve un objeto de usuario si son válidas
        const user = { id: 1, name: 'Example User' };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
    // Otros proveedores como Google, GitHub, etc.
  ],
  // Otras configuraciones, si es necesario
});
