from django.db import models

# Create your models here.


# Product category
class ProductCategory(models.Model):
     title = models.CharField(max_length=300)
     slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)

     class Meta:
        verbos_name = "Product_categories"

# Product
class Product(AbstractUser):
      slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)
      title = models.CharField(max_length=300)
      category = models.ForeignKey(
        ProductCategory, null=True, blank=True,
        verbose_name=_("Product_categories"), on_delete=models.CASCADE)

      class Meta:
                verbose_name = "Products"


#class PremiumAccount(models.Model):

