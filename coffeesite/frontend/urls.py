from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('join', index),
    path('join/3', index),
    path('create', index),
    path('offers', index),
    path('room/<str:roomCode>', index)
]