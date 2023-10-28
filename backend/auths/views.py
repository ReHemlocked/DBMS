from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import SignUpModel,LogInModel
from .serializer import SignUpSerializer,LogInSerializer
# Create your views here.

# handles the signup component of the webiste
class SignUp(ListCreateAPIView):
    queryset=SignUpModel.objects.all() #all the users will be displayed at the api endpoint
    serializer_class=SignUpSerializer

    # overide the perform_create function to handle all err cases
    def perform_create(self, serializer):
        username=serializer.validated_data.get('username') #fetch the username
        email=serializer.validated_data.get('email')
        password=serializer.validated_data.get("password") #fetch password

        #check if the username is a duplicate
        if(SignUpModel.objects.filter(username=username).exists()): 
            res={"error":"Please choose a different username"} 
            return Response(res,status=status.HTTP_400_BAD_REQUEST) 
        
        #check for duplicate email_id
        if(SignUpModel.objects.filter(email=email).exists()):
            return Response({"error":"The email_id entered already exists"},status=status.HTTP_400_BAD_REQUEST)
        
        # handle the case where password field len is greater than 30
        if(len(password)>30):
            res={"error":"ensure password field has no more than 30 charecters"}
            return Response(res,status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save() # if no errors the user has registered successfully


class LogIn(CreateAPIView):
    # using Singup model here instead of login model because login model has no data
    # the login model is probably not required, because all user info is stored in signup table
    queryset=SignUpModel.objects.all()
    serializer_class=LogInSerializer
    # serializer used however is login serializer 

    def create(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data) #creates an instance of LoginSerializer class
        serializer.is_valid(raise_exception=True)

        validated_data=serializer.validated_data
        email=validated_data.get("email")
        password=validated_data.get("password")

        # checks if the email,password field exists in the signup table, if yes returns status 200 else status 400
        try:
            user=SignUpModel.objects.get(email=email,password=password)
        except SignUpModel.DoesNotExist:
            res={"error":"User does not exist"}
            return Response(res,status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"message":"Logged in Successfully"},status=status.HTTP_200_OK)


