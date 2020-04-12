import request from '@/utils/request.js'

export default {
  login: function(data) {
    return request({
      url: 'http://hzcfcc.xicp.net:81/szcfapp/WebService_demo.asmx/sp_login',
      method: 'get',
      params: data
    })
  },
   sp_po_mstr_untreated: function(data) {
    return request({
      url: 'http://hzcfcc.xicp.net:81/szcfapp/WebService_demo.asmx/sp_po_mstr_untreated',
      method: 'post',
      params: data
    })
  }
}
