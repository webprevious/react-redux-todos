const initState = [
  {
    id: 1,
    content: '第一个待做事项',
    done: false
  },
  {
    id: 2,
    content: '第二个待做事项',
    done: false
  },
  {
    id: 3,
    content: '第三个待做事项',
    done: false
  }
]

export default function todos (state = initState, action) {
  console.log(action)
  switch (action.type) {
    case 'UPDATEITEM':
      return state.map(item => {
        if (action.id === item.id) {
          return {
            ...item,
            content: action.content
          }
        } else {
          return item
        }
      })
      break
    case 'REMOVEITEM':
      return state.filter(item => {
        return action.id === item.id ? false : true
      })
      break
    case 'SELECTITEM':
      return state.map(item => {
        if (action.id === item.id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
      break
    case 'ADDITEM':
      return [
        {
          id: (state.reduce((preValue, item) => {
            return preValue < item.id ? item.id : preValue
          }, -1)) + 1,
          content: action.content
        },
        ...state
      ]
      break
  }
  return state
}