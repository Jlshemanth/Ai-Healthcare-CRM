from langgraph.graph import StateGraph, END
from typing import TypedDict

from app.tools.sentiment_analysis import analyze_sentiment
from app.tools.followup_suggestion import suggest_followup

class AgentState(TypedDict):
    text: str
    sentiment: str
    followup: str

def sentiment_node(state):

    sentiment = analyze_sentiment(state["text"])

    return {
        "sentiment": sentiment
    }

def followup_node(state):

    result = suggest_followup()

    return {
        "followup": result["suggestion"]
    }

graph = StateGraph(AgentState)

graph.add_node("sentiment", sentiment_node)
graph.add_node("followup", followup_node)

graph.set_entry_point("sentiment")

graph.add_edge("sentiment", "followup")
graph.add_edge("followup", END)

app_graph = graph.compile()