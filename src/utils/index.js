import { mapValues } from 'lodash'
import axios from 'axios'

const request = options =>
  axios.create().post(options.url).then((response) => {
    const { data } = response
    return data
  })
const generateRequest = url =>
  async function f(payload = {}) {
    return request({ url, method: 'post', data: payload })
  }
const getServices = data => mapValues(data, val => generateRequest(val))
export { getServices }
