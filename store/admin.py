from django.contrib import admin
<<<<<<< HEAD
from .models import Product, ProductCategory, Cart, Favourite
=======
from .models import Product, ProductCategory, Cart, Item, Favourite
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7

# Register your models here.

class ProductInline(admin.TabularInline):
    model = Product
    
    
class ProductAdmin(admin.ModelAdmin):
    model = Product

<<<<<<< HEAD

    
class CartAdmin(admin.ModelAdmin):
    model = Cart
=======
class ItemInline(admin.TabularInline):
    model = Item
    
class ItemAdmin(admin.ModelAdmin):
    model = Item
    list_filter = ('cart',)
    
class CartAdmin(admin.ModelAdmin):
    model = Cart
    inlines = [ItemInline,]
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
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
<<<<<<< HEAD

=======
admin.site.register(Item, ItemAdmin)
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
admin.site.register(Favourite, FavouriteAdmin)