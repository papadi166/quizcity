
web: daphne blog.asgi:application --port $PORT --bind 0.0.0.0 -v2
celery: celery -A blog.celery worker --pool=solo -l info
celerybeat: celery -A blog beat -l info
