from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,permissions
from .serializers import *
from rest_framework.response import *
from .models import *

class ItemViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerialzier

    # def list(self, request):
    #     queryset = self.queryset
    #     serializer = self.serializer_class(queryset, many = True)
    #     return Response(serializer.data)

    # def create(self, request):
    #     serializer = self.serializer_class(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     else: 
    #         return Response(serializer.errors, status=400)

    # def retrieve(self, request, pk=None):
    #     item = self.queryset.get(pk=pk)
    #     serializer = self.serializer_class(item)
    #     return Response(serializer.data)

    # def update(self, request, pk=None):
    #     item = self.queryset.get(pk=pk)
    #     serializer = self.serializer_class(item, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     else:
    #         return Response(serializer.errors, status=400)

    # def destroy(self, request, pk=None):
    #     item = self.queryset.get(pk=pk)
    #     item.delete()
    #     return Response(status=204)
