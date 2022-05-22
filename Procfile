release: python manage.py migrate
web: daphne blog.asgi:application --port $PORT --bind 0.0.0.0 -v2
chatworker: python manage.py runworker --settings=blog.settings -v2