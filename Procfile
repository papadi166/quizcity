web: daphne blog.asgi:application --port $PORT --bind 0.0.0.0
celery: celery -A blog.celery worker --pool=solo -l info
celerybeat: celery -A blog beat -l info
celeryworker: celery -A blog.celery worker & celery -A blog beat --pool=solo -l INFO & wait -n