from rest_framework import serializers
from .models import Photo, Collection

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'



class CollectionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__'