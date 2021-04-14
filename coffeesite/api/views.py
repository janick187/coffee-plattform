from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.

def BadRequest():
    return Response({'Bad request': 'Invalid post data'}, status=status.HTTP_400_BAD_REQUEST)

class CreateOfferView(APIView):

    serializer_class = CreateOfferSerializer

    def post(self, request, format=None):
        print(request.data)
        # serializes the data and gives us data in python interpretable fromat back
        serializer = self.serializer_class(data=request.data)
        print(serializer)
        print(serializer.is_valid())
        if serializer.is_valid():
            print("we are here")
            type = serializer.data.get('type')
            quantity = serializer.data.get('quantity')
            
            offer = Offer(type=type, quantity=quantity)
            offer.save()

            return Response(CreateOfferSerializer(offer).data, status=status.HTTP_200_OK)
        
        # if serializer is not valid, we have another problem
        return BadRequest()

class GetSingleOfferView(APIView):
    pass

# returns all elements of {model} in the database
class GetAllOfferView(generics.ListAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer