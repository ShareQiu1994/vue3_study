/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 10:03:58
 * @LastEditTime: 2021-06-06 15:31:19
 */
const storage = {
  set (key:any, value:any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get (key:any) {
    let item:any = localStorage.getItem(key)
    return JSON.parse(item)
  },
  remove (key:any) {
    localStorage.removeItem(key)
  }
}

export default storage
