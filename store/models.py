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
      price =  models.FloatField() #dolar
      count = models.IntegerField(default=1)
      available = models.IntegerField(default=1)

      class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
        
      def __str__(self):
            return str(self.title) + ": $" + str(self.price)






class Cart(models.Model):
      owner = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True, related_name="owner",)
      created_at = models.DateTimeField(auto_now_add=True)
      checked_out = models.BooleanField(default=False, verbose_name='checked out')
      total = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
      updated = models.DateTimeField(auto_now=True)
      products = models.ManyToManyField(Product)
      
      def __str__(self):
                  return self.owner.username
      class Meta:
              verbose_name = "Cart"
              ordering = ('-created_at',)
#class PremiumAccount(models.Model):

class Favourite(models.Model):
      products =  models.ManyToManyField(Product)
      user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
      

      


      


   


