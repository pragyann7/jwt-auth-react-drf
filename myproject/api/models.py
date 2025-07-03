from django.db import models

# Create your models here.
class Products(models.Model):
    product_name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/')
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name