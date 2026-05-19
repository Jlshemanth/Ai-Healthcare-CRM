import { useState } from "react"
import axios from "axios"

function ChatAssistant() {

  const [text, setText] = useState("")
  const [response, setResponse] = useState("")

  const analyzeInteraction = async () => {

    const result = await axios.post(
      "http://127.0.0.1:8000/analyze",
      {
        text: text
      }
    )

    setResponse(result.data.response)
  }

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 h-full">

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-indigo-700">
          AI Assistant
        </h1>

        <p className="text-gray-500 mt-2">
          Analyze doctor interactions using AI
        </p>

      </div>

      <textarea
        placeholder="Describe your interaction..."
        rows="8"
        className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-4 w-full mb-5 rounded-xl transition"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyzeInteraction}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:opacity-90 transition text-white px-6 py-4 rounded-xl font-semibold text-lg w-full shadow-md"
      >
        Analyze Interaction
      </button>

      {
        response && (

          <div className="mt-6 whitespace-pre-line bg-indigo-50 border border-indigo-200 p-6 rounded-2xl text-gray-800 leading-8 shadow-sm">

            <h2 className="text-xl font-bold text-indigo-700 mb-4">
              AI Analysis Result
            </h2>

            {response}

          </div>

        )
      }

    </div>
  )
}

export default ChatAssistant