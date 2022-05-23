# This will make sure the app is always imported when
# Django starts so that shared_task will use this app.
from .celery import app as celery_app

__all__ = ('celery_app',)

BROKER_URL = 'redis://:p7048c4c40f2bd0182bed4a2502f6302e2aa47c97830148e52ae8cf66035bf337@ec2-54-155-14-129.eu-west-1.compute.amazonaws.com:14670'

