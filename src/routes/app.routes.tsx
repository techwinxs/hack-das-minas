import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChamaKira } from '../pages/ChamaKira'
import { Artigos } from '../pages/ChamaKira/Artigos'
import DashInicial from '../pages/DashInicial'

//pages 
import UpdateUserStatus from '../pages/UpdateUserStatus'
import EditAvatar from '../pages/EditAvatar'
import ShareCalendar from '../pages/ShareCalendar'
import Ideas from '../pages/Ideas'

import { Pontos } from '../pages/Pontos'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/share-calendar" element={<ShareCalendar />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/update-user-status" element={<UpdateUserStatus />} />
            <Route path="/avatar" element={<EditAvatar />} />
            <Route path="/" element={<DashInicial />} />
            <Route path="/pontos" element={<Pontos />} />
            <Route path="/chamakira" element={<ChamaKira />} />
            <Route path="/artigos" element={<Artigos />} />
        </Routes>
    )
}

export default AppRoutes