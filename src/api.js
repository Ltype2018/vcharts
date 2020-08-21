import service from '@/utils/http'
import BASE_URL from '@/utils/base.js'


const getData = () =>service({
    method:"get",
    url:BASE_URL
})

export {getData}