from django.urls import path
from .views import TestUserView


urlpatterns= [    
    path("", TestUserView.as_view()),
]
