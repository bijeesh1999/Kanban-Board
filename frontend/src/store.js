import { configureStore} from '@reduxjs/toolkit'
import kanbanSlice from './redux/kanbanSlice'



export const store = configureStore({
    reducer: {
      datas:kanbanSlice
    },
  })

export default store