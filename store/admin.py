from django.contrib import admin
from .models import Product, ProductCategory, Cart, Favourite

# Register your models here.

class ProductInline(admin.TabularInline):
    model = Product
    
    
class ProductAdmin(admin.ModelAdmin):
    model = Product


    
class CartAdmin(admin.ModelAdmin):
    model = Cart
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

admin.site.register(Favourite, FavouriteAdmin)