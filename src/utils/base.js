const BASE_URL = process.env.NODE_ENV === 'production'
      ? 'https://lab.isaaclin.cn/nCoV/api/area?latest=1'
      : '/list.json'


export default BASE_URL