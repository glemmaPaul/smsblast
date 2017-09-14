<template>

<form>
  <input-wrapper>
    <input v-validate:message="'required'" type="text" :value="message" @input="updateTextMessage" />
    <tooltip class="error" v-bind:message="errors.first('message')"></tooltip>
  </input-wrapper>

  <input-wrapper>
    <input v-validate:phoneNumber="'required|email'" :value="to" type="text" @input="updatePhoneNumber" />
    <tooltip class="error" v-bind:message="errors.first('phoneNumber')"></tooltip>
  </input-wrapper>

  <input-wrapper>
    <button @click="sendRequest">
      Send out!
    </button>
  </input-wrapper>
</form>

</template>

<script>
import { mapState } from 'vuex'
import { InputWrapper, Tooltip } from '@/components/Form'
import { UPDATE_TEXT_MESSAGE, UPDATE_PHONE_NUMBER, SEND_TEXT_FORM } from './duex'

export default {
  name: 'text-form',
  components: {
    InputWrapper,
    Tooltip
  },
  computed: mapState({
    message: state => state.TextForm.message,
    to: state => state.TextForm.to,
    loading: state => state.TextForm.loading
  }),
  methods: {
    updateTextMessage (e) {
      this.$store.commit(UPDATE_TEXT_MESSAGE, e.target.value)
    },
    updatePhoneNumber (e) {
      this.$store.commit(UPDATE_PHONE_NUMBER, e.target.value)
    },
    sendRequest (e) {
      this.$store.dispatch(SEND_TEXT_FORM)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  width: 200px;
  margin: 0 auto;
}
</style>
