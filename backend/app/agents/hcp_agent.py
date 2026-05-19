from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv

# Load environment variables

load_dotenv()

# Get API key from .env

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# LLM Model

llm = ChatGroq(
    api_key=GROQ_API_KEY,
    model_name="llama-3.3-70b-versatile"
)

# AI Agent Function

def ask_agent(message):

    response = llm.invoke(message)

    return response.content