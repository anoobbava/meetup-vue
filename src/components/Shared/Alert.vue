<template>
  <v-alert
      :value="true"
      dismissible
      type="error"
      @input="closeAlert"
    >
    {{message}}
    </v-alert>
</template>

<script>
  export default {
    props: ['message'],
    methods: {
      closeAlert () {
        console.log('closed Alert')
        this.$emit('closed')
      }
    }
  }
</script>
