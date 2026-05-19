import { useState } from "react"
import axios from "axios"

function InteractionForm() {

  const [hcpName, setHcpName] = useState("")
  const [interactionType, setInteractionType] = useState("")
  const [topics, setTopics] = useState("")
  const [followUp, setFollowUp] = useState("")

  const saveInteraction = async () => {

    const result = await axios.post(
      "http://127.0.0.1:8000/save-interaction",
      {
        hcp_name: hcpName,
        interaction_type: interactionType,
        topics: topics,
        follow_up: followUp
      }
    )

    alert(result.data.message)

    setHcpName("")
    setInteractionType("")
    setTopics("")
    setFollowUp("")
  }

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-blue-700">
          Log HCP Interaction
        </h1>

        <p className="text-gray-500 mt-2">
          Record healthcare professional interactions efficiently
        </p>

      </div>

      <input
        type="text"
        placeholder="HCP Name"
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-4 w-full mb-4 rounded-xl transition"
        value={hcpName}
        onChange={(e) => setHcpName(e.target.value)}
      />

      <select
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-4 w-full mb-4 rounded-xl transition"
        value={interactionType}
        onChange={(e) => setInteractionType(e.target.value)}
      >
        <option value="">Interaction Type</option>
        <option value="Visit">Visit</option>
        <option value="Call">Call</option>
        <option value="Email">Email</option>
      </select>

      <textarea
        placeholder="Topics Discussed"
        rows="4"
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-4 w-full mb-4 rounded-xl transition"
        value={topics}
        onChange={(e) => setTopics(e.target.value)}
      />

      <textarea
        placeholder="Follow-up Actions"
        rows="4"
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-4 w-full mb-6 rounded-xl transition"
        value={followUp}
        onChange={(e) => setFollowUp(e.target.value)}
      />

      <button
        onClick={saveInteraction}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition text-white px-6 py-4 rounded-xl w-full font-semibold text-lg shadow-md"
      >
        Save Interaction
      </button>

    </div>
  )
}

export default InteractionForm