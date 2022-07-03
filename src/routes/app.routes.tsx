import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages 
import UpdateUserStatus from '../pages/UpdateUserStatus'
import EditAvatar from '../pages/EditAvatar'
import ShareCalendar from '../pages/ShareCalendar'
import Ideas from '../pages/Ideas'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ShareCalendar />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/update-user-status" element={<UpdateUserStatus />} />
            <Route path="/edit-avatar" element={<EditAvatar />} />
        </Routes>
    )
}

export default AppRoutes