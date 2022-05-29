from django.contrib import admin
from .models import Product, ProductCategory, Cart, Item, Favourite

# Register your models here.

class ProductInline(admin.TabularInline):
    model = Product
    
    
class ProductAdmin(admin.ModelAdmin):
    model = Product

class ItemInline(admin.TabularInline):
    model = Item
    
class ItemAdmin(admin.ModelAdmin):
    model = Item
    list_filter = ('cart',)
    
class CartAdmin(admin.ModelAdmin):
    model = Cart
    inlines = [ItemInline,]
    list_filter = ('owner',)

class FavouriteAdmin(admin.ModelAdmin):
    model = Favourite
    #inlines = [ProductInline,]
    
class FavouriteInline(admin.TabularInline):
    model = Favourite
    #inlines = [ProductInline,]


    
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductCategory)
admin.site.register(Cart, CartAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Favourite, FavouriteAdmin)