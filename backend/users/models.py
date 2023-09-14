from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    uid = models.UUIDField()
    avatar = models.URLField()
    gender = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=50)
    displayed_picture = models.BooleanField(default=False)
