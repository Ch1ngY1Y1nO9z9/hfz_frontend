import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

export default (
    <Routes>
        <Route path="/en/index" />
        <Route path="/en/Arts/ALL" />
        <Route path="/en/Wrestlers/All" />
        <Route path="/en/Previous" />
        <Route path="/en/Poll" />
        <Route path="/en/FAQ" />

        <Route path="/jp/index" />
        <Route path="/jp/Arts/ALL" />
        <Route path="/jp/Wrestlers/All" />
        <Route path="/jp/Previous" />
        <Route path="/jp/Poll" />
        <Route path="/jp/FAQ" />

        <Route path="/zh/index" />
        <Route path="/zh/Arts/ALL" />
        <Route path="/zh/Wrestlers/All" />
        <Route path="/zh/Previous" />
        <Route path="/zh/Poll" />
        <Route path="/zh/FAQ" />
    </Routes>
)