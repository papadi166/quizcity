from django.db import models
from django.conf import settings

# Create your models here.



# Product category
class ProductCategory(models.Model):
     title = models.CharField(max_length=300)
     slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)

     class Meta:
        verbose_name = "Product category"
        verbose_name_plural = "Product categories"
        
     def __str__(self):
            return self.title

# Product
class Product(models.Model):
      slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)
      title = models.CharField(max_length=300)
      category = models.ForeignKey(
      ProductCategory, null=True, blank=True,
      verbose_name="Product_categories", on_delete=models.CASCADE)
      image = models.ImageField(upload_to='store_images/', null=True, blank=True)
<<<<<<< HEAD
      price =  models.FloatField() #dolar
      count = models.IntegerField(default=1)
      available = models.IntegerField(default=1)
=======
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7

      class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
        
      def __str__(self):
<<<<<<< HEAD
            return str(self.title) + ": $" + str(self.price)
=======
            return self.title
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7






class Cart(models.Model):
      owner = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True, related_name="owner",)
      created_at = models.DateTimeField(auto_now_add=True)
      checked_out = models.BooleanField(default=False, verbose_name='checked out')
      total = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
      updated = models.DateTimeField(auto_now=True)
<<<<<<< HEAD
      products = models.ManyToManyField(Product)
=======

>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
      
      def __str__(self):
                  return self.owner.username
      class Meta:
              verbose_name = "Cart"
              ordering = ('-created_at',)
#class PremiumAccount(models.Model):

class Favourite(models.Model):
      products =  models.ManyToManyField(Product)
      user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
      

      
<<<<<<< HEAD
=======
class Item(models.Model):
      item = models.ForeignKey(Product, null=True, on_delete=models.CASCADE)
      cart = models.ForeignKey(Cart, null=True, on_delete=models.CASCADE)
      quantity = models.PositiveIntegerField()
      favourites = models.ForeignKey(Favourite, on_delete=models.CASCADE)

      def __str__(self):
                  return self.item.title
      class Meta:
              verbose_name = "Item"
              verbose_name_plural = "Items"
              ordering = ('-cart',)
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7


      


   


