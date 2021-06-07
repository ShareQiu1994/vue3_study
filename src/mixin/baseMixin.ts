/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 21:39:24
 * @LastEditTime: 2021-06-05 21:45:11
 */
const baseMixin = {
  data () {
    return {
      apiUrl: 'http://www.itying.com',
      msg: 'baseMixin Msg'
    }
  },
  methods: {
    success () {
      alert('baseMixin 成功success 方法')
    },
    run () {
      alert('baseMixin run 方法')
    }
  }
}

export default baseMixin
