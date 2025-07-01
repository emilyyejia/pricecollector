from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)  
    category = models.CharField(max_length=50) 
    country = models.CharField(max_length=50)  
    currency = models.CharField(max_length=3)
    price_local = models.DecimalField(max_digits=10, decimal_places=2) 
    price_cad = models.DecimalField(max_digits=10, decimal_places=2) 

    def __str__(self):
        return self.name