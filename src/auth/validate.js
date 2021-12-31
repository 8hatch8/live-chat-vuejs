import axios from 'axios'
import removeItem from './removeItem'
// ref: CompositionAPI
import { ref } from 'vue'

const refError = ref(null)
const validate = async() => {
    refError.value = null
    const uid         = localStorage.getItem('uid')
    const client      = localStorage.getItem('client')
    const accessToken = localStorage.getItem('access-token')

    try {
      const res = await axios.get("http://localhost:3000/auth/validate_token",{
        headers: {
          uid:            uid,
          'access-token': accessToken,
          client:         client
        }
      })

      if(!res){
        throw new Error('認証に失敗しました')
      }

      return res
    } catch(error) {
      refError.value = '認証に失敗しました'
      removeItem()
    }
}

const useValidate = () => {
  return { refError, validate }
}

export default useValidate