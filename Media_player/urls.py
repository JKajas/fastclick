from django.urls import path
from . import views


app_name = "Media_player"
urlpatterns = [
    path('', views.index),
]   
