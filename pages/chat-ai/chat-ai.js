import { getGptAIChat } from '../../api/chat-ai.js'
const app = getApp()
// 使async\await能够在微信小程序中使用
const regeneratorRuntime = app.globalData.regeneratorRuntime

Page({
  data: {
    loading: false,
    sendMessage: '',
    messageList: []
  },
  async onConfirm(e) {
    this.data.sendMessage = e.detail.value
    if (this.data.sendMessage) {
      this.setData({
        loading: true,
        messageList: this.data.messageList.concat([
          {
            id: this.data.messageList.length + 1,
            avatar: 'user.jpg',
            message: this.data.sendMessage
          },
          {
            id: this.data.messageList.length + 2,
            avatar: 'avatar.png',
            isLoading: true,
            message: ''
          }
        ]),
        sendMessage: ''
      })
      let editName = `messageList[${this.data.messageList.length - 1}]`
      try {
        let { data: result } = await getGptAIChat({ content: e.detail.value })
        this.setData({
          [`${editName}.message`]: result.choices
            ? result.choices[0].message.content
            : '出错啦~再试一下哦'
        })
      } catch {
        this.setData({
          [`${editName}.message`]: '哎呀刚才我开小差啦，麻烦你再问一遍~'
        })
      } finally {
        this.setData({
          loading: false,
          [`${editName}.isLoading`]: false
        })
      }
    }
  }
})
