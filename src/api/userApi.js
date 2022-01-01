// 用户相关的API接口
import request from '@/utils/request'
// 登录 API 接口
export const loginAPI = function (obj) {
  return request.post('/v1_0/authorizations', obj)
}
