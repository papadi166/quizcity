
from dataclasses import fields
from .models import Cart, Item, Product, ProductCategory, Favourite
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
    
    
    class Meta:
        model = Cart
        fields = "__all__"

class FavouriteSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    user = MiniUserSerializer()
    
    
    class Meta:
        model = Favourite
        fields = "__all__"
