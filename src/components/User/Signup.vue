<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-md2 v-if="error">
        <alert @closed="closedEvent" :message="error.message"></alert>
      </v-flex>
    </v-layout>

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
            :loading="loading"
            :disabled="!checkData"
            color="success"
            @click="loader = 'loading'"
            type="submit">
            Sign Up
            <span slot="loader" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
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
      },

      user () {
        return this.$store.getters.user
      },

      error () {
        return this.$store.getters.error
      },

      loading () {
        return this.$store.getters.loading
      }

    },

    watch: {

      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }

    },

    methods: {
      SubmitUser () {
        console.log(this.email + ' ' + this.password)
        this.$store.dispatch('signUpUser', { email: this.email, password: this.password })
      },

      closedEvent () {
        console.log('Event')
        this.$store.dispatch('errorAction')
      }

    }
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
