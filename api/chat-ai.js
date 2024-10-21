import ajax from '../utils/ajax'

export const getGptAIChat = (params) =>
  ajax.post(
    'https://api.chatanywhere.tech/v1/chat/completions',
    {
      Authorization: '',
      redirect: 'follow'
    },
    {
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: params.content
        }
      ]
    }
  )
