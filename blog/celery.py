import os

from celery import Celery

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blog.settings')

app = Celery('blog')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django apps.
app.autodiscover_tasks()
app.conf.broker_url = 'rediss://:p7048c4c40f2bd0182bed4a2502f6302e2aa47c97830148e52ae8cf66035bf337@ec2-54-155-14-129.eu-west-1.compute.amazonaws.com:14670'
app.conf.result_backend = 'rediss://:p7048c4c40f2bd0182bed4a2502f6302e2aa47c97830148e52ae8cf66035bf337@ec2-54-155-14-129.eu-west-1.compute.amazonaws.com:14670'

@app.task(bind=True)
def add(x, y):
    return x + y