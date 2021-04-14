from rest_framework import serializers
from .models import Offer

class CreateOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        # which data the frontend has to send to the API
        fields = ("type", "quantity")

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'