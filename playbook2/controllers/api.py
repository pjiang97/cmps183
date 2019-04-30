# Here go your api methods.

@auth.requires_signature()
def add_event():
    id = db.events.insert(
        event_title=request.vars.event_title,
        event_content=request.vars.event_content,
        creator_name=request.vars.creator_name,
        creator_email=request.vars.creator_email,
        event_category=request.vars.event_category,
        size_limit=request.vars.size_limit,

    )
    # We return the id of the new event, so we can insert it along all the others.
    return response.json(dict(event_id=id))


def get_events_list():
    results = []
        # User can see events whether they are logged in or not
    rows = db().select(db.events.ALL, orderby=~db.events.post_time)
    for row in rows:
        results.append(dict(
            id=row.id,
            event_title=row.event_title,
            event_content=row.event_content,
            creator_name=row.creator_name,
            creator_email=row.creator_email,
            event_category=row.event_category,
            size_limit=row.size_limit,
        ))
    # For homogeneity, we always return a dictionary.
    return response.json(dict(event_list=results))

def get_sports_events_list():
    results = []
    print("XXXXXXXXXXXXXXXXXXXXXXXXX")
    print(request.vars.category)
        # User can see events whether they are logged in or not
    rows = db(db.events.event_category == "Sports").select(db.events.ALL, orderby=~db.events.post_time)
    for row in rows:
        results.append(dict(
            id=row.id,
            event_title=row.event_title,
            event_content=row.event_content,
            creator_name=row.creator_name,
            creator_email=row.creator_email,
            event_category=row.event_category,
            size_limit=row.size_limit,
        ))
    # For homogeneity, we always return a dictionary.
    return response.json(dict(sports_event_list=results))

def get_board_events_list():
    results = []
        # User can see events whether they are logged in or not
    rows = db(db.events.event_category == "Board Games").select(db.events.ALL, orderby=~db.events.post_time)
    for row in rows:
        results.append(dict(
            id=row.id,
            event_title=row.event_title,
            event_content=row.event_content,
            creator_name=row.creator_name,
            creator_email=row.creator_email,
            event_category=row.event_category,
            size_limit=row.size_limit,
        ))
    # For homogeneity, we always return a dictionary.
    return response.json(dict(board_event_list=results))

def get_video_events_list():
    results = []
        # User can see events whether they are logged in or not
    rows = db(db.events.event_category == "Video Games").select(db.events.ALL, orderby=~db.events.post_time)
    for row in rows:
        results.append(dict(
            id=row.id,
            event_title=row.event_title,
            event_content=row.event_content,
            creator_name=row.creator_name,
            creator_email=row.creator_email,
            event_category=row.event_category,
            size_limit=row.size_limit,
        ))
    # For homogeneity, we always return a dictionary.
    return response.json(dict(video_event_list=results))
