from django.shortcuts import render

from rest_framework import generics

from .models import Photo, Collection, Test

from .serializers import PhotoSerializer, CollectionSerializers, TestSerializers

class PhotoList(generics.ListCreateAPIView):
    serializer_class = PhotoSerializer

    def get_queryset(self):
        queryset = Photo.objects.all()
        collectionName = self.request.query_params.get('collection')
        
        if collectionName is not None:
            queryset = queryset.filter(collection = collectionName)

        return queryset

class PhotoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PhotoSerializer
    queryset = Photo.objects.all()


class CollectionList(generics.ListCreateAPIView):
    serializer_class = CollectionSerializers
    queryset = Collection.objects.all()


class TestList(generics.ListCreateAPIView):
    serializer_class = TestSerializers
    queryset = Test.objects.all()

class CollectionDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CollectionSerializers
    queryset = Collection.objects.all()
