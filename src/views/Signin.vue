<script>
import Button from '../components/UI/Button.vue';
import Checkbox from '../components/UI/Checkbox.vue';
import Input from '../components/UI/Input.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import router from '../router/index.js';
export default {
  data() {
    return {
      email: '',
      password: '',
      checked: false,
      checkerDisabled: false,
      errorMess: '',
    };
  },
  components: {
    Input,
    Button,
    Checkbox,
  },
  methods: {
    entrance() {
      if (this.checked) {
        signInWithEmailAndPassword(getAuth(), this.email, this.password)
          .then((data) => {
            console.log('Successfully entrance');

            this.email = '';
            this.password = '';
            this.checked = false;

            router.push('/rokets');
            localStorage.setItem('authToken', JSON.stringify(data.user.accessToken));
          })
          .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case 'auth/invalid-email':
                this.errorMess = 'Invalid email';
                break;
              case 'auth/user-disabled':
                this.errorMess = 'User disabled';
                break;
              case 'auth/invalid-credential':
                this.errorMess = 'Invalid credential';
                break;
              case 'auth/user-not-found':
                this.errorMess = 'User not found';
                break;
              case 'auth/wrong-password':
                this.errorMess = 'Wrong password';
                break;
              default:
                this.errorMess = '';
                break;
            }
          });
      } else {
        this.checkerDisabled = true;
      }
    },
  },
};
</script>

<template>
  <div class="signup">
    <div class="container">
      <img class="signup__logo-top" src="/assets/logo-white.svg" alt="Travalizer" />
      <div class="signup__wrapper">
        <div class="signup__inner">
          <img class="signup__logo" src="/assets/logo.svg" alt="Travalizer" />
          <h2 class="signup__title">Artificial Intelligence giving you travel recommendations</h2>
          <p class="signup__desc">Welcome Back, Please login to your account</p>
          <form class="signup-form" @submit.prevent="entrance">
            <Input
              title="Email"
              type="text"
              placeholder="robert.langster@gmail.com"
              v-model="email"
            />
            <Input title="Password" type="password" placeholder="password" v-model="password" />
            <div class="signup-form__contain">
              <Checkbox v-model:checked="checked" :checkerDisabled="checkerDisabled" />
              <a class="signup-form__forgot" href="#">Forgot password?</a>
            </div>
            <div class="signup-form__buttons">
              <Button>Login</Button>
              <router-link style="width: 100%" to="/signup">
                <Button light>Sign Up</Button>
              </router-link>
            </div>
            <div v-if="errorMess" class="signup-form__error">
              {{ errorMess }}
            </div>
          </form>
          <div class="signup__socials">
            <div class="signup__socials-title">Or, login with</div>
            <ul class="signup__socials-items">
              <li class="signup__socials-item">
                <a class="signup__socials-item-link" href="#">Facebook</a>
              </li>
              <li class="signup__socials-item">
                <a class="signup__socials-item-link" href="#">Linked In</a>
              </li>
              <li class="signup__socials-item">
                <a class="signup__socials-item-link" href="#">Google</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="signup__box">
          <img class="signup__box-img" src="/assets/img/signup-bg-img.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.signup {
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: #355b3e;
  padding: 40px 0;

  @media (max-width: 1023px) {
    margin: 0;
    min-height: 100%;

    .container {
      margin: 0;
      padding: 0;
    }
  }

  &__wrapper {
    display: flex;
    box-shadow: 0 72px 80px -48px #223a28;
    background: #fff;
    border-radius: 24px;
    min-height: 714px;
    overflow: hidden;

    @media (max-width: 1023px) {
      flex-direction: column;
      border-radius: 0;
    }
  }

  &__logo-top {
    display: none;

    @media (max-width: 1023px) {
      display: block;
      margin: 32px auto;
    }
  }

  &__inner {
    flex: none;
    width: 550px;
    padding: 40px 64px 66px;

    @media (max-width: 1199px) {
      width: 500px;
      padding: 40px;
    }

    @media (max-width: 1023px) {
      width: 100%;
    }

    @media (max-width: 575px) {
      padding: 32px 24px;
    }
  }

  &__logo {
    margin-bottom: 56px;

    @media (max-width: 1023px) {
      display: none;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #355b3e;
    margin-bottom: 16px;

    @media (max-width: 575px) {
      font-size: 20px;
    }
  }

  &__desc {
    color: #58745e;
    margin-bottom: 32px;
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #f5dbc4;

    @media (max-width: 1023px) {
      order: -1;
    }
  }

  &__box-img {
    width: 100%;
    max-width: 500px;
    padding: 20px;

    @media (max-width: 1023px) {
      padding: 35px 70px;
    }

    @media (max-width: 991px) {
      height: 225px;
    }

    @media (max-width: 575px) {
      height: 155px;
    }
  }

  &__socials {
    display: flex;
    gap: 24px;
    margin-top: 56px;

    @media (max-width: 575px) {
      flex-direction: column;
      align-items: center;
      gap: 18px;
      margin-top: 40px;
      font-size: 14px;
    }
  }

  &__socials-title {
    color: #58745e;
  }

  &__socials-items {
    display: flex;
    gap: 24px;

    @media (max-width: 575px) {
      justify-content: space-between;
      gap: 35px;
      margin: 0 10px;
    }
  }
  &__socials-item-link {
    font-weight: 500;
    color: #355b3e;
    transition: color 0.3s;

    &:hover {
      color: #439756;
    }
  }
}

.signup-form {
  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  &__contain {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__forgot {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-align: right;
    color: #355b3e;
  }

  &__error {
    text-align: center;
    margin-top: 15px;
    font-size: 15px;
    color: red;
  }
}
</style>
