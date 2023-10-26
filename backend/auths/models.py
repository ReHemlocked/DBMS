from django.db import models
import uuid

# Create your models here.
class UserAccountModel(models.Model):
    user_id=models.UUIDField(default=uuid.UUID4,editable=False,unique=True)
    username=models.CharField(max_length=30,blank=False)
    email=models.EmailField(blank=False)
    password=models.CharField(blank=False)
    