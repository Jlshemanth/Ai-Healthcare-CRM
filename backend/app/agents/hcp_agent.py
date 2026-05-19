from langchain_groq import ChatGroq
import os

os.environ["GROQ_API_KEY"] = "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"

llm = ChatGroq(
    api_key=os.environ["GROQ_API_KEY"],
    model_name="llama-3.3-70b-versatile"
)

def ask_agent(message):
    response = llm.invoke(message)
    return response.content