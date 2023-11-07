from django.db import models
from auths.models import SignUpModel
import uuid
# Create your models here.
class FriendModel(models.Model):
    user_id1 = models.ForeignKey(SignUpModel, on_delete=models.CASCADE, related_name='friends_user_id1')
    user_id2 = models.ForeignKey(SignUpModel, on_delete=models.CASCADE, related_name='friends_user_id2')
    status = models.CharField(choices=[("pending","Pending"),("accepted","Accepted"),("rejected","Rejected")])
