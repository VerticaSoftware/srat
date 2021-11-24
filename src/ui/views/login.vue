<template>
  <header class="login-head">
    <img src="@/assets/images/logo.png" width="200" alt="MTC">
    <div class="no-account" @mouseenter="handleTooltip" @mouseleave="handleTooltip">
      <p class="no-account__quest">&iquest;No tienes una cuenta?</p>
      <i class="no-account__icon far fa-question-circle"></i>
      <div class="tooltip">Para obtener una cuenta de usuario ponte en contacto con el administrador de la p&aacute;gina.</div>
    </div>
  </header>
  <main class="main">
    <h1 class="title">Agentes SRAT</h1>
    <p class="subtitle">Ingresa con tu cuenta</p>
    <form class="login-form" @submit="submitLogin">
      <div id="username" class="textfield">
        <input class="textfield__input" @input="validateField" v-model="user.username.value" type="text" placeholder="Usuario">
        <span v-if="!user.username?.valid" class="textfield__error">Ingrese un usuario v&aacute;lido</span>
      </div>
      <div id="password" class="textfield">
        <input class="textfield__input" @input="validateField" v-model="user.password.value" type="password" placeholder="Contrase&ntilde;a">
        <span v-if="!user.password?.valid" class="textfield__error">Ingrese una contrase&ntilde;a v&aacute;lida</span>
      </div>
      <label class="checkbox">
        <input type="checkbox" hidden v-model="user.remember" @change="rememberMe">
        <i class="checkbox__icon far fa-square"></i>
        <span class="checkbox__label">Recu&eacute;rdame</span>
      </label>
      <button class="button" type="submit">Ingresar</button>
    </form>
  </main>
</template>

<style scoped>
.login-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  height: 85px;
}

.no-account {
  display: flex;
  align-items: center;
  grid-gap: 8px;
  cursor: pointer;
  position: relative;
}

.no-account * { pointer-events: none; }
.no-account__quest { color: var(--primaryColor); }
.no-account__icon {
  color: var(--primaryColor);
  font-size: 22px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 85px);
  padding: 30px;
}

.title {
  font-size: 32px;
  color: var(--primaryColor);
  font-weight: 800;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 18px;
  margin: 5px 0 20px 0;
}

.login-form {
  width: 350px;
}

.textfield { margin-bottom: 15px; }
.textfield__input { text-align: center; }

.textfield__error {
  display: block;
  text-align: center;
  margin-top: 3px;
}

.button { margin-top: 25px; }
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { User } from "@/domain/models/user";
import Util from '@/assets/scripts/global'

export default class Login extends Vue {

  private user: User = new User()
  private submited: boolean = false

  handleTooltip(e: MouseEvent) {
    const tooltip = document.querySelector('.no-account .tooltip') as HTMLElement
    if(e.type == 'mouseenter') { tooltip.style.display = 'block' }
    else { tooltip.style.removeProperty('display') }
  }

  submitLogin(e: any) {
    this.submited = true
    const regex = Util.regexPatterns
    let errorCount = 0
    
    if(!regex.username.test(this.user.username!.value ?? '')) {
      errorCount++
      this.user.username!.valid = false
    }

    if(!regex.password.test(this.user.password!.value ?? '')) {
      errorCount++
      this.user.password!.valid = false
    }
    
    if(errorCount > 0) {
      e.preventDefault()
    }
    else {
      alert(`Call login : ${this.user.username!.value} - ${this.user.password!.value}`)
      this.$router.push('/dashboard')
    }
    
  }

  validateField(e: KeyboardEvent) {
    if(this.submited) {
      const t = e.target as HTMLElement
      const parent = t.parentElement?.getAttribute('id')
      const regex = Util.regexPatterns
      
      if(parent == 'username') {
        this.user.username!.valid = regex.username.test(this.user.username!.value ?? '')
      }
      else {
        this.user.password!.valid = regex.password.test(this.user.password!.value ?? '')
      }
    }
  }

  rememberMe(e: MouseEvent) {
    const t = e.target as HTMLInputElement
    this.user.remember = t.checked
  }
  
}
</script>
