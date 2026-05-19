def analyze_sentiment(text):

    text = text.lower()

    if "liked" in text or "interested" in text:
        return "Positive"

    elif "concerned" in text or "worried" in text:
        return "Neutral"

    return "Negative"