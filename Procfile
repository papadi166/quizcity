web: daphne blog.asgi:channel_layer --port $PORT --bind 0.0.0.0 -v2
chatworker: python manage.py runworker channels --settings=blog.settings -v2