from django.urls import path
from .views import PhotoList, CollectionList, PhotoDetail, CollectionDetail, TestList

urlpatterns = [
    path('photos/', PhotoList.as_view(), name='photo-list'),
    path('photos/<int:pk>/', PhotoDetail.as_view(), name='photo-detail'),
    path('collections/', CollectionList.as_view(), name='collection-list'),
    path('collections/<int:pk>/', CollectionDetail.as_view(), name='collection-detail'),
     path('tests/', TestList.as_view(), name='Test-list'),
]
