from django.db import models
import string
import random

def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if not Offer.objects.filter(code=code).exists():
            break
    
    return code

# Create your models here.
class Offer(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    type = models.CharField(max_length=50)
    quantity = models.CharField(max_length=2)
    created_at = models.DateTimeField(auto_now_add=True)