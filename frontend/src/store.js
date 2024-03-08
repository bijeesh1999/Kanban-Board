import { configureStore} from '@reduxjs/toolkit'
import taskSlice from './redux/task/taskSlice'
import progresSlice from './redux/progress/progresSlice'
import userSlice from './redux/users/userSlice'
import adminSlice from './redux/admin/adminSlice'
import projectSlice from './redux/project/projectSlice'



export const store = configureStore({
    reducer: {
      datas:taskSlice,
      progress:progresSlice,
      user:userSlice,
      admin:adminSlice,
      project:projectSlice
      
    },
  })

export default store