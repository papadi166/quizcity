from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, Cart, ProductCategory, Item, Favourite
from .serializers import CartSerializer, ItemSerializer, FavouriteSerializer, ProductSerializer
# Create your views here.
from django.db.models import Q

class CartViewSet(viewsets.ModelViewSet):
    #permission_classes = {IsAuthenticated}
    
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    lookup_field = "owner"
    
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = "cart"
    
class FavouriteViewSet(viewsets.ModelViewSet):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    lookup_field = "user"

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "title"
    

   

    
    
   # def get_queryset(self):
    #    now = datetime.datetime.now()
   #    time_threshold = datetime.datetime.now(timezone.utc) - datetime.timedelta(minutes=15)
    #    return Item.objects.filter(Q(game_creator=self.request))
