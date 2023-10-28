from django.urls import path 
from .views import SignUp,LogIn
urlpatterns=[
    path('signup/',SignUp.as_view()),
    path('login/',LogIn.as_view()),
    # path('Threads/Display/<int:pk>',DispThreads.as_view()),
    # path('Threads/Create',CreateThread.as_view()),
]