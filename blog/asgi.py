"""
ASGI config for blog project.
It exposes the ASGI callable as a module-level variable named ``application``.
For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""
from django.core.asgi import get_asgi_application
django_asgi_app = get_asgi_application()
import os
import django



from channels.routing import ProtocolTypeRouter
from channels.auth import AuthMiddlewareStack
from channels.routing import URLRouter

from quizes.routing import ws_urlpatterns

# ----------------------------- #

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blog.settings')
django.setup()

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(URLRouter(ws_urlpatterns)),
    
})