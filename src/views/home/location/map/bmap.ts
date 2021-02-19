const ak = '2HpUQygyhNplMhMDv3bfQgchUjGQ66f6'
/**
 * 异步加载百度地图
 * @returns {Promise}
 * @constructor
 */
function loadBaiDuMap(): Promise<any> {
  return new Promise(function (resolve, reject) {
    try {
      console.log(BMap === undefined || BMap);
      resolve(BMap)
    } catch (error) {
      window.onload = function () {
        resolve(BMap)
      }
      let sc = document.createElement('script')
      sc.type = 'text/javascript'
      sc.src = `http://api.map.baidu.com/getscript?v=3.0&ak=2HpUQygyhNplMhMDv3bfQgchUjGQ66f6&services=&t=20210201100830`
      sc.onerror = reject
      document.body.appendChild(sc)
    }
  })
}
export { loadBaiDuMap }