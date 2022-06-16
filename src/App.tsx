/*
react-router-dom v6 から、講義中のバージョンとは以下の箇所が異なる
1. "Router"→"BrowserRouter"
2. "Switch"→"Routes"
3. "exact path"→"path"
4. "component={ コンポーネント名 }"→"element={ < コンポーネント名 /> }"
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from 'components/NavigationBar/NavigationBar'
import Footer from 'components/Footer/Footer'
import { MembersPage } from 'pages/members/MembersPage'
import React from 'react'
import TeamPage from 'pages/teams/TeamsPage'
import {
  BackendTeamPage,
  EducationTeamPage,
  EventTeamPage,
  FinanceTeamPage,
  FrontendTeamPage,
  MarketingTeamPage,
  OutreachTeamPage,
  ProjectTeamPage
} from 'pages/teams/team/index'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        {/* Placeholder for home and about */}
        {/* <Route paths={["/", "/home"]} element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/team/backend" element={<BackendTeamPage />} />
        <Route path="/team/event" element={<EventTeamPage />} />
        <Route path="/team/education" element={<EducationTeamPage />} />
        <Route path="/team/finance" element={<FinanceTeamPage />} />
        <Route path="/team/frontend" element={<FrontendTeamPage />} />
        <Route path="/team/marketing" element={<MarketingTeamPage />} />
        <Route path="/team/outreach" element={<OutreachTeamPage />} />
        <Route path="/team/project" element={<ProjectTeamPage />} />
        {/* <Route path="/*" element={<404Page />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
