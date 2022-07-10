
from dataclasses import fields
<<<<<<< HEAD
from .models import Cart, Product, ProductCategory, Favourite
=======
from .models import Cart, Item, Product, ProductCategory, Favourite
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
from users.models import UserModel
from rest_framework import serializers
from django.db.models import Q
from users.serializers import MiniUserSerializer



class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = Product
        fields = "__all__"

<<<<<<< HEAD


class CartSerializer(serializers.ModelSerializer):
    owner = MiniUserSerializer()
    products = ProductSerializer(many=True)
    
  
=======
class ItemSerializer(serializers.ModelSerializer):
    item = ProductSerializer()
    class Meta:
        model = Item
        fields = "__all__"

class CartSerializer(serializers.ModelSerializer):
    owner = MiniUserSerializer()
    items = serializers.SerializerMethodField()
    
    
    def get_items(self,obj):
        
        item = Item.objects.get(Q(cart=obj))

        serializer = ItemSerializer(item)
        return serializer.data
    
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
    
    class Meta:
        model = Cart
        fields = "__all__"

class FavouriteSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    user = MiniUserSerializer()
    
    
    class Meta:
        model = Favourite
        fields = "__all__"
