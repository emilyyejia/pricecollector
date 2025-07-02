from rest_framework import serializers
from .models import *

class ItemSerialzier(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id','name', 'category', 'country', 'currency', 'price_local', 'price_cad')
