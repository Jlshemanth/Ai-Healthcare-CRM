import { useState } from "react"

import InteractionForm from "./components/InteractionForm"
import ChatAssistant from "./components/ChatAssistant"
import InteractionHistory from "./components/InteractionHistory"
import LoginPage from "./components/LoginPage"

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [activePage, setActivePage] = useState("dashboard")

  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const [darkMode, setDarkMode] = useState(false)
  const [largeText, setLargeText] = useState(false)

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />
  }

  return (

    <div
      className={`min-h-screen flex transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-pink-50 via-white to-rose-100 text-black"
      } ${largeText ? "text-xl" : "text-base"}`}
    >

      {/* Sidebar */}

      <div
        className={`w-72 shadow-2xl border-r p-8 transition-all duration-500 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-pink-100"
        }`}
      >

        <h1 className="text-4xl font-bold text-pink-700 mb-12">
          HCP AI CRM
        </h1>

        <div className="space-y-4">

          <button
            onClick={() => setActivePage("dashboard")}
            className={`w-full text-left px-6 py-4 rounded-2xl font-semibold transition ${
              activePage === "dashboard"
                ? "bg-pink-600 text-white shadow-md"
                : darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
            }`}
          >
            📊 Dashboard
          </button>

          <button
            onClick={() => setActivePage("interactions")}
            className={`w-full text-left px-6 py-4 rounded-2xl font-semibold transition ${
              activePage === "interactions"
                ? "bg-pink-600 text-white shadow-md"
                : darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
            }`}
          >
            🩺 Interactions
          </button>

          <button
            onClick={() => setActivePage("ai")}
            className={`w-full text-left px-6 py-4 rounded-2xl font-semibold transition ${
              activePage === "ai"
                ? "bg-pink-600 text-white shadow-md"
                : darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
            }`}
          >
            🤖 AI Assistant
          </button>

          <button
            onClick={() => setActivePage("analytics")}
            className={`w-full text-left px-6 py-4 rounded-2xl font-semibold transition ${
              activePage === "analytics"
                ? "bg-pink-600 text-white shadow-md"
                : darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
            }`}
          >
            📈 Analytics
          </button>

        </div>

      </div>

      {/* Main Content */}

      <div className="flex-1 p-10 overflow-y-auto">

        {/* Topbar */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1
              className={`text-5xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Welcome Back 👋
            </h1>

            <p
              className={`mt-3 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              AI-powered healthcare interaction management dashboard
            </p>

          </div>

          {/* Notifications + Profile */}

          <div className="flex items-center gap-4 relative">

            {/* Notifications */}

            <div className="relative">

              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`px-5 py-3 rounded-2xl shadow border transition ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
                    : "bg-white border-pink-100 hover:bg-pink-50"
                }`}
              >
                🔔 Notifications
              </button>

              {
                showNotifications && (

                  <div
                    className={`absolute right-0 mt-3 w-80 rounded-3xl shadow-2xl p-5 z-50 ${
                      darkMode
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white border border-pink-100"
                    }`}
                  >

                    <h2 className="text-2xl font-bold text-pink-700 mb-4">
                      Notifications
                    </h2>

                    <div className="space-y-4">

                      <div className="bg-pink-50 p-4 rounded-2xl text-black">
                        Follow-up pending for Dr. Sharma
                      </div>

                      <div className="bg-pink-50 p-4 rounded-2xl text-black">
                        AI analysis completed successfully
                      </div>

                      <div className="bg-pink-50 p-4 rounded-2xl text-black">
                        Product X engagement increased
                      </div>

                    </div>

                  </div>

                )
              }

            </div>

            {/* Profile */}

            <div className="relative">

              <button
                onClick={() => setShowProfile(!showProfile)}
                className="bg-pink-600 hover:bg-pink-700 transition text-white px-5 py-3 rounded-2xl shadow-lg"
              >
                Medical Representative
              </button>

              {
                showProfile && (

                  <div
                    className={`absolute right-0 mt-3 w-72 rounded-3xl shadow-2xl p-5 z-50 ${
                      darkMode
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white border border-pink-100"
                    }`}
                  >

                    <div className="text-center mb-5">

                      <div className="w-20 h-20 rounded-full bg-pink-100 mx-auto flex items-center justify-center text-3xl">
                        👨‍⚕️
                      </div>

                      <h2 className="text-2xl font-bold text-pink-700 mt-4">
                        Medical Rep
                      </h2>

                      <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
                        healthcare@crm.ai
                      </p>

                    </div>

                    <div className="space-y-3">

                      {/* Dark Mode */}

                      <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="w-full bg-pink-50 hover:bg-pink-100 transition p-3 rounded-2xl text-left text-black"
                      >
                        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                      </button>

                      {/* Accessibility */}

                      <button
                        onClick={() => setLargeText(!largeText)}
                        className="w-full bg-pink-50 hover:bg-pink-100 transition p-3 rounded-2xl text-left text-black"
                      >
                        🔠 Accessibility Text Mode
                      </button>

                      {/* Reports */}

                      <button className="w-full bg-pink-50 hover:bg-pink-100 transition p-3 rounded-2xl text-left text-black">
                        📄 Reports
                      </button>

                      {/* Accessibility Support */}

                      <div className="bg-pink-50 p-3 rounded-2xl text-black">

                        <h3 className="font-bold text-pink-700 mb-2">
                          Accessibility Support
                        </h3>

                        <p className="text-sm leading-6">
                          Optimized for hearing-impaired and speech-impaired users through enhanced visual indicators and text-focused workflows.
                        </p>

                      </div>

                      {/* Logout */}

                      <button
                        onClick={() => setLoggedIn(false)}
                        className="w-full bg-red-50 hover:bg-red-100 transition p-3 rounded-2xl text-left text-red-600"
                      >
                        🚪 Logout
                      </button>

                    </div>

                  </div>

                )
              }

            </div>

          </div>

        </div>

        {/* DASHBOARD */}

        {
          activePage === "dashboard" && (

            <div className="space-y-10">

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className={`p-8 rounded-3xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>
                  <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
                    Total Interactions
                  </p>
                  <h1 className="text-6xl font-bold text-pink-600 mt-4">
                    128
                  </h1>
                </div>

                <div className={`p-8 rounded-3xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>
                  <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
                    Positive Sentiment
                  </p>
                  <h1 className="text-6xl font-bold text-green-500 mt-4">
                    87%
                  </h1>
                </div>

                <div className={`p-8 rounded-3xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>
                  <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
                    Pending Follow-ups
                  </p>
                  <h1 className="text-6xl font-bold text-orange-500 mt-4">
                    14
                  </h1>
                </div>

                <div className={`p-8 rounded-3xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>
                  <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
                    AI Analyses
                  </p>
                  <h1 className="text-6xl font-bold text-indigo-500 mt-4">
                    92
                  </h1>
                </div>

              </div>

              {/* Insights */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className={`p-8 rounded-3xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>

                  <h2 className="text-3xl font-bold text-pink-700 mb-6">
                    AI Insights
                  </h2>

                  <div className="space-y-5 leading-8">

                    <p>• Doctor engagement increased by 18%</p>
                    <p>• Product X interest trending upward</p>
                    <p>• AI suggests oncology follow-ups</p>
                    <p>• Most HCPs responded positively</p>

                  </div>

                </div>

                <div className={`p-8 rounded-3xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>

                  <h2 className="text-3xl font-bold text-pink-700 mb-6">
                    Recent Activity
                  </h2>

                  <div className="space-y-4">

                    <div className="bg-pink-50 p-5 rounded-2xl text-black">
                      Dr. Sharma interaction analyzed
                    </div>

                    <div className="bg-pink-50 p-5 rounded-2xl text-black">
                      Brochure sent successfully
                    </div>

                    <div className="bg-pink-50 p-5 rounded-2xl text-black">
                      Follow-up scheduled
                    </div>

                  </div>

                </div>

              </div>

            </div>

          )
        }

        {/* INTERACTIONS */}

        {
          activePage === "interactions" && (

            <div className="space-y-8">

              <InteractionForm />
              <InteractionHistory />

            </div>

          )
        }

        {/* AI */}

        {
          activePage === "ai" && (

            <ChatAssistant />

          )
        }

        {/* ANALYTICS */}

        {
          activePage === "analytics" && (

            <div className={`p-10 rounded-3xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>

              <h1 className="text-5xl font-bold text-pink-700 mb-8">
                CRM Analytics
              </h1>

              <div className="space-y-6 text-lg leading-9">

                <p>• 87% positive HCP engagement</p>
                <p>• 14 follow-ups pending</p>
                <p>• Oncology most discussed category</p>
                <p>• AI detected strong doctor interest</p>

              </div>

            </div>

          )
        }

      </div>

    </div>
  )
}

export default App