import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashInicial from '../pages/DashInicial'

//pages 
import EditAvatar from '../pages/EditAvatar'
import { Pontos } from '../pages/Pontos'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<DashInicial />} />
            <Route path="/avatar" element={<EditAvatar />} />
            <Route path="/pontos" element={<Pontos />} />
        </Routes>
    )
}

export default AppRoutes