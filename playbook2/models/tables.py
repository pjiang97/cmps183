# Define your tables below (or better in another model file) for example
#
# >>> db.define_table('mytable', Field('myfield', 'string'))
#
# Fields can be 'string','text','password','integer','double','boolean'
#       'date','time','datetime','blob','upload', 'reference TABLENAME'
# There is an implicit 'id integer autoincrement' field
# Consult manual for more options, validators, etc.



# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)

import datetime

def get_user_email():
    return None if auth.user is None else auth.user.email

def get_current_time():
    return datetime.datetime.utcnow()

db.define_table('events',
                Field('creator_email', default=get_user_email()),
                Field('creator_name'),
                Field('event_title'),
                Field('event_content', 'text'),
                Field('post_time', 'datetime', default=get_current_time()),
                Field('event_category'),
                Field("size_limit"),
                )


db.define_table('house',
                Field('house_name'),
                )
