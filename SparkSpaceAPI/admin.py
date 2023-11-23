from django.contrib import admin

# Register your models here.
from .models import Collection, Photo

admin.site.register(Collection)
admin.site.register(Photo)


