from rest_framework import serializers
from .models import Photo, Collection, Test

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'
    def create(self, validated_data):
        image = validated_data.pop('image', None)
        photo = Photo.objects.create(**validated_data)
        if image:
            photo.image.save(image.name, image)
        return photo

class CollectionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__'

class TestSerializers(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'
        
