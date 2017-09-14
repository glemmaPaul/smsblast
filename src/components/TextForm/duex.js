import { requestTextBlast } from '@/api'

export const SEND_TEXT_FORM = 'sendTextForm'
export const TEXT_FORM_SENT = 'textFormSent'
export const TEXT_FORM_LOADING = 'textFormLoading'
export const UPDATE_TEXT_MESSAGE = 'updateMessage'
export const UPDATE_PHONE_NUMBER = 'updatePhoneNumber'

export default {
  state: {
    loading: false,
    success: false,
    message: null,
    to: null
  },
  mutations: {
    [TEXT_FORM_SENT] (state, { successful }) {
      state.loading = true
      state.successful = successful
    },
    [TEXT_FORM_LOADING] (state) {
      state.submitted = true
    },
    [UPDATE_TEXT_MESSAGE] (state, message) {
      state.message = message
    },
    [UPDATE_PHONE_NUMBER] (state, phoneNumber) {
      state.to = phoneNumber
    }
  },
  actions: {
    [SEND_TEXT_FORM] (state) {
      requestTextBlast(state.to, state.message)
        .then((data) => {
          state.commit(TEXT_FORM_LOADING, false)
          state.commit(TEXT_FORM_SENT, true)
        })
        .catch(() => state.commit({
          success: false,
          send: true
        }))
    }
  },
  getters: {

  }
}
