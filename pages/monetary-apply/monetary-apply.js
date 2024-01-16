import { monetaryProducts } from '../../api/local-data'
import Toast from '@vant/weapp/toast/toast'

Page({
  data: {
    product: null
  },
  onLoad(options) {
    const product = monetaryProducts.find(
      (item) => item.id === parseInt(options.id)
    )
    wx.setNavigationBarTitle({
      title: product.name
    })
    this.setData({
      product: product
    })
  },
  onApply() {
    Toast('申请个锤子申请')
  }
})
