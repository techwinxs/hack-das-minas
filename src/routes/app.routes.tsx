import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashInicial from '../pages/DashInicial'

//pages 
import EditAvatar from '../pages/EditAvatar'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<DashInicial />} />
            <Route path="/avatar" element={<EditAvatar />} />
        </Routes>
    )
}

export default AppRoutes