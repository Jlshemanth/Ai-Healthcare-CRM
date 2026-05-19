import { useEffect, useState } from "react"
import axios from "axios"

function InteractionHistory() {

  const [interactions, setInteractions] = useState([])

  const fetchInteractions = async () => {

    const result = await axios.get(
      "http://127.0.0.1:8000/interactions"
    )

    setInteractions(result.data)
  }

  useEffect(() => {
    fetchInteractions()
  }, [])

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-blue-700">
          Interaction History
        </h1>

        <p className="text-gray-500 mt-2">
          View previously logged HCP interactions
        </p>

      </div>

      {
        interactions.length === 0 ? (

          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
            No interactions found
          </div>

        ) : (

          interactions.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-5 hover:shadow-md transition"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-bold text-gray-800">
                  {item.hcp_name}
                </h2>

                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                  {item.interaction_type}
                </span>

              </div>

              <div className="space-y-3 text-gray-700">

                <p>
                  <span className="font-semibold text-gray-900">
                    Topics:
                  </span>{" "}
                  {item.topics}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
                    Follow-up:
                  </span>{" "}
                  {item.follow_up}
                </p>

              </div>

            </div>

          ))
        )
      }

    </div>
  )
}

export default InteractionHistory