from .views import *
from django.urls import path

urlpatterns = [
    path('create-offer', CreateOfferView.as_view()),
    path('offers', GetAllOfferView.as_view())
]