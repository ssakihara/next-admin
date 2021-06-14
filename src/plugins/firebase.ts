import { init } from 'next-firebase-auth';

export const initAuth = () => {
  init({
    authPageURL: '/auth/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/auth/login',
    logoutAPIEndpoint: '/api/auth/logout',
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENTE_MAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: process.env.FIREBASE_DATABASE,
    },
    firebaseClientInitConfig: {
      apiKey: process.env.FIREBASE_KEY,
      authDomain: process.env.FIREBASE_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE,
      projectId: process.env.FIREBASE_PROJECT_ID,
    },
    cookies: {
      name: process.env.NEXT_PUBLIC_APP_NAME,
      keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000,
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      signed: true,
    },
  });
};

export default initAuth;
