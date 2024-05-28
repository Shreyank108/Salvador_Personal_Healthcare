from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name="home"),
    path('login', signIn, name="login"),
    path('signup', signUp, name="signUp"),
    path('logout', logout, name="logout"),
    path('cardio', cardio, name="cardio"),
]
