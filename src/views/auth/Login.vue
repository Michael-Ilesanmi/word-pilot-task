<template>
  <main>
    <img src="@/assets/img/login.png" class="aspect-square lg:block hidden" alt="Login Page">
    <div id="login__card">
        <img src="@/assets/img/logo/logo.svg" class="text-center w-fit mx-auto mb-16" alt="Word Pilot Logo">
        <div class="font-primary space-y-4">
            <h1 class="text-4xl font-bold">Sign In</h1>
            <p class="text-text-secondary">Enter your email and password to sign in!</p> 
        </div>
        <form @submit.prevent="login()" class="mt-8">
            <fieldset>
                <label for="email">Email*</label><br>
                <input type="email" v-model="loginDetails.email" name="email" id="email" placeholder="mail@simmmple.com" :class="{ '!border-red-400' : v$.email?.$invalid}" />
                <span v-if="v$.email?.$invalid" class="text-xs text-red-600">Enter a valid email address</span>
            </fieldset>
            <fieldset>
                <label for="password">Password*</label><br>
                <input type="password" v-model="loginDetails.password" name="password" id="password" placeholder="Min. 8 characters" :class="{ '!border-red-400' : v$.password?.$invalid}" />
                <span v-if="v$.password?.$invalid" class="text-xs text-red-600">Password must be at least 8 characters</span>
            </fieldset>
            <div class="text-sm font-primary w-full flex justify-between items-center">
                <div>
                    <input type="checkbox" v-model="loginDetails.remember_me" name="remember_me" id="remember_me">
                    <label for="remember_me">Keep me logged in</label>
                </div>
                <a href="#" class="text-primary-blue">Forget password?</a>
            </div>
            <button :disabled="v$.$invalid" class="disabled:cursor-not-allowed">
                Sign In
            </button>
        </form>
        <div>
            <div class="w-full flex items-center justify-between space-x-4 text-text-secondary font-medium font-secondary">
                <span class="border-t-2 grow"></span>
                <span>or</span>
                <span class="border-t-2 grow"></span>
            </div>
            <button class="bg-[#F4F7FE] font-medium">
                <span class="iconify" data-icon="flat-color-icons:google"></span> Sign in with Google
            </button>
        </div>
        <p class="font-primary text-sm">
            Not registered yet? <a href="#" class="text-primary-blue font-bold">Create an Account</a>
        </p>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useRouter } from "vue-router";

const router = useRouter();

const loginDetails = reactive({
    email: "",
    password: "",
    remember_me: true,
})
const rules = {
    email: { required, email, $lazy: true},
    password: { required, minLength: minLength(8), $lazy: true}
}
 const v$ = useVuelidate(rules, loginDetails)

const login = async () => {
    const result = await v$.value.$validate()
    if (! result) {
        return;
    }
    alert('Login Successful')
    return  router.push({ name: "DashboardIndex"});

}
</script>

<style lang='less' scoped>
main {
    @apply bg-[#F2F1F9] w-full min-h-screen h-full font-secondary text-text-primary grid grid-flow-col place-items-center;
}
button {
    @apply text-sm rounded px-2 py-3 font-primary w-full my-4 transition-colors ease-linear duration-500;
}
#login__card{
    @apply place-self-start bg-white w-9/12 md:w-3/5 lg:w-3/4 mx-auto shadow-[#7090B01F] min-h-screen py-24 px-16;
    form {
        fieldset {
            @apply space-y-1 mb-4 text-sm;
            label {
                @apply font-medium font-primary;
            }
            input {
                @apply border border-[#E0E5F2] focus:border-[#77AEF4] rounded p-3 w-full text-text-secondary;
            }
        }
        button {
            @apply bg-primary-blue font-bold text-white hover:bg-secondary-blue;
        }
    }
}

</style>