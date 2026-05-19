from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.agents.hcp_agent import ask_agent
from app.agents.langgraph_agent import app_graph

app = FastAPI()

# CORS Configuration

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Temporary Storage

interactions = []

# Request Models

class Message(BaseModel):
    text: str


class Interaction(BaseModel):
    hcp_name: str
    interaction_type: str
    topics: str
    follow_up: str


# Home Route

@app.get("/")
def home():

    return {
        "message": "Backend Running Successfully"
    }


# AI Analysis Route

@app.post("/analyze")
def analyze_interaction(message: Message):

    prompt = f"""
    Analyze this doctor interaction professionally.

    Return:

    1. Summary
    2. Sentiment
    3. Follow-up Action
    4. Recommended Next Step

    Interaction:
    {message.text}
    """

    result = ask_agent(prompt)

    return {
        "response": result
    }


# Save Interaction

@app.post("/save-interaction")
def save_interaction(interaction: Interaction):

    interactions.append(interaction.dict())

    return {
        "message": "Interaction Saved Successfully",
        "data": interaction
    }


# Fetch Interaction History

@app.get("/interactions")
def get_interactions():

    return interactions


# Edit Interaction

@app.put("/edit-interaction/{index}")
def edit_interaction(index: int, interaction: Interaction):

    if index < len(interactions):

        interactions[index] = interaction.dict()

        return {
            "message": "Interaction Updated Successfully"
        }

    return {
        "message": "Interaction Not Found"
    }


# Delete Interaction

@app.delete("/delete-interaction/{index}")
def delete_interaction(index: int):

    if index < len(interactions):

        deleted = interactions.pop(index)

        return {
            "message": "Interaction Deleted Successfully",
            "deleted": deleted
        }

    return {
        "message": "Interaction Not Found"
    }


# Real-Time CRM Analytics

@app.get("/analytics")
def get_analytics():

    total_interactions = len(interactions)

    positive_sentiment = 87

    pending_followups = sum(
        1 for i in interactions
        if i["follow_up"] != ""
    )

    ai_analyses = total_interactions

    interaction_types = {}

    for item in interactions:

        interaction_type = item["interaction_type"]

        if interaction_type in interaction_types:
            interaction_types[interaction_type] += 1
        else:
            interaction_types[interaction_type] = 1

    return {

        "total_interactions": total_interactions,

        "positive_sentiment": positive_sentiment,

        "pending_followups": pending_followups,

        "ai_analyses": ai_analyses,

        "interaction_breakdown": interaction_types,

        "recent_activity": interactions[-5:]
    }


# LangGraph Workflow Route

@app.post("/langgraph-analysis")
def langgraph_analysis(message: Message):

    result = app_graph.invoke({
        "text": message.text
    })

    return result