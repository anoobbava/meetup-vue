<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm8 offset-md2>
        <h1>Sign Up</h1>
        <form @submit.prevent="SubmitUser">
          <v-text-field
            v-model='email'
            placeholder='email'
            :rules="[rules.required, rules.email]">
          </v-text-field>

          <v-text-field
            v-model='password'
            placeholder='password'
            :rules="[rules.required]"
            type='password'>
          </v-text-field>

          <v-text-field
            v-model='confirmPassword'
            placeholder='confirm Password'
            :rules="[rules.required, confirmPasswordCorrect]"
            type='password'>
          </v-text-field>
          <v-btn
            color="success"
            type="submit"
            :disabled="!checkData">
            Sign Up
          </v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        rules: {
          required: value => !!value || 'Required Field',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    },
    computed: {
      confirmPasswordCorrect () {
        return this.password !== this.confirmPassword ? 'Passwords not match' : ''
      },
      checkData () {
        return this.email !== '' && this.password !== '' && this.confirmPassword !== ''
      }

    },
    methods: {
      SubmitUser () {
        console.log(this.email + ' ' + this.password)
        this.$store.dispatch('signUpUser', { email: this.email, password: this.password })
      }

    }
  }
</script>
