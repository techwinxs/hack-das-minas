import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChamaKira } from '../pages/ChamaKira'
import { Artigos } from '../pages/ChamaKira/Artigos'
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
            <Route path="/chamakira" element={<ChamaKira />} />
            <Route path="/artigos" element={<Artigos />} />
        </Routes>
    )
}

export default AppRoutes