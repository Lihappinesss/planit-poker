import './index.sass';

import authController from './controllers/Auth';

import router from './modules/Router';

import Signin from './pages/signin';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Chat from './pages/chat';
import NotFound from './pages/notFound';

authController.fetchUser().then(() => {
  router
    .use('/', Chat)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/profile', Profile)
    .use('/notFound', NotFound)
    .start();
});
