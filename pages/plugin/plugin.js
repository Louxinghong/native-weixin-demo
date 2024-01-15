import { topicTab } from '../../utils/util'

Page({
  data: {
    plugins: [
      {
        imgName: 'wether',
        url: '/pages/wether/wether',
        title: '天气查询'
      },
      {
        imgName: 'cnode',
        url: '/pages/cnode/cnode',
        title: 'CNode'
      },
      {
        imgName: 'bilibili',
        url: '/pages/bilibili/bilibili',
        title: 'Bilbili'
      },
      {
        imgName: 'luck-draw',
        url: '/pages/luck-draw/luck-draw',
        title: 'LuckDraw'
      }
    ],
    showHalfMiniPage: ''
  },
  onLoad(options) {
    this.setData({
      showHalfMiniPage: options.showHalfMiniInNextPage
    })
  },
  onPay() {
    wx.navigateTo({
      url: '/pages/wether/wether'
    })
    // '/pages/wether/wether'.includes(options.showHalfMiniInNextPage) &&
    //   wx.openEmbeddedMiniProgram({
    //     appId: 'wxe5f52902cf4de896'
    //     // path: 'pages/cnode/cnode'
    //   })
    wx.openEmbeddedMiniProgram({
      appId: 'wxece3a9a4c82f58c9',
      path: 'commercialize/pages/taoke-guide/index?scene=22da6be111ad489d9ed2322f4a76a44e'
    })
  }
})
