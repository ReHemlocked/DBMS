from django.db import models
import uuid

# Create your models here.
class SignUpModel(models.Model):
    user_id=models.UUIDField(default=uuid.uuid4,unique=True) #uuid.uuid4 will generate a unique user_id 
    username=models.CharField(unique=True) #setting unique=True also auto creates an index for username
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=30)
    

class LogInModel(models.Model):
    email=models.EmailField()
    password=models.CharField(max_length=30)  