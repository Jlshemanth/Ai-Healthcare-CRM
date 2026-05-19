def edit_interaction(index, new_data, interactions):

    if index < len(interactions):

        interactions[index] = new_data

        return {
            "message": "Interaction updated successfully"
        }

    return {
        "message": "Interaction not found"
    }