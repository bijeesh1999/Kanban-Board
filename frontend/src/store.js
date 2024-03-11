import { configureStore} from '@reduxjs/toolkit'
import taskSlice from './redux/task/taskSlice'
import progresSlice from './redux/progress/progresSlice'
import userSlice from './redux/users/userSlice'
import adminSlice from './redux/admin/adminSlice'
import projectSlice from './redux/project/projectSlice'
import shareTaskSlice from './redux/taskShare/shareTaskSlice'



export const store = configureStore({
    reducer: {
      datas:taskSlice,
      progress:progresSlice,
      user:userSlice,
      admin:adminSlice,
      project:projectSlice,
      share:shareTaskSlice
      
    },
  })

export default store