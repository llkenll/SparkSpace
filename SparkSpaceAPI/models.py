from django.db import models

# Create your models here.

class Collection(models.Model):
    collectionName = models.CharField(max_length=100)
    def __str__(self):
        return self.collectionName

class Test(models.Model):
    title = models.CharField(max_length=100)
    def __str__(self):
        return self.title

class Photo(models.Model):
    photoTitle = models.CharField(max_length=100)
    photoDescription = models.CharField(max_length=2000)
    date_added = models.DateField(auto_now_add=True)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='photos/')
    def __str__(self):
        return self.photoTitle
    def delete(self):
        self.image.delete()
        super().delete()
