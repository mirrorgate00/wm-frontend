import { helpers, required } from '@vuelidate/validators'

export const required$ = helpers.withMessage('Обязательное поле', required)
