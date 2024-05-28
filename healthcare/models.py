from django.db import models

# Create your models here.
class User(models.Model):
    Gender = [("M", "Male"), ("F", "Female")]
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    phone = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    dob = models.DateField()
    gender = models.CharField(max_length=10, choices=Gender)
