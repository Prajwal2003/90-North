from django.urls import path
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
from django.urls import path
from . import views

urlpatterns += [
    path('', views.chat_home, name='chat_home'),
    path('chat/<int:user_id>/', views.chat_with_user, name='chat_with_user'),
]
