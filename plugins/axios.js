// import axios from 'axios'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
  })
  return {
    provide: {
      axios: instance,
    },
  }
})




// export default defineNuxtPlugin((nuxtApp) => {
//   const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     timeout: 10000,
//   })
//   return {
//     provide: {
//       axios: instance,
//     },
//   }
// })