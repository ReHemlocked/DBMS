from rest_framework import serializers
from .models import SignUpModel,LogInModel

# serilizers are a component of django that helps convert complex data types like database model instances or records into 
# python data types.


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model=SignUpModel
        fields='__all__'

class LogInSerializer(serializers.ModelSerializer):
    class Meta:
        model=LogInModel
        fields='__all__'
        