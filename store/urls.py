from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from .views import CartViewSet, FavouriteViewSet, ProductViewSet

router = DefaultRouter()
router.register('cart', CartViewSet)
router.register('favourite', FavouriteViewSet)
router.register('products', ProductViewSet)

urlpatterns = [
    path("", include(router.urls)),
    
]
