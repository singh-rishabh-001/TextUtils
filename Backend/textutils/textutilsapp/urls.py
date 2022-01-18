from django.urls import path, include
from textutilsapp import views

urlpatterns = [
    path('wchat/', views.ChatView.as_view(), name="whatsappchat"),
]
