from rest_framework import serializers
from .models import Photo, Collection, Test

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'



class CollectionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__'

class TestSerializers(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'