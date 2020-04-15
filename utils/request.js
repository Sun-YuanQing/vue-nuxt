import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: "", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // ...
})
//
// // request interceptor
// service.interceptors.request.use(
//   config => {
//       config.headers['Content-Type'] = "application/x-www-form-urlencoded";
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )
//
// // response interceptor
// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//   */
//
//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   response => {
//
//   },
//   error => {
//     console.log('err' + error) // for debug
//
//   }
// )
//
export default service
