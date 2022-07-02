import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages 
import EditAvatar from '../pages/EditAvatar'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<EditAvatar />} />
        </Routes>
    )
}

export default AppRoutes