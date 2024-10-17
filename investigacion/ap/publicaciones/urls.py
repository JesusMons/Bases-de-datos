from django.urls import path
from . import views

urlpatterns = [
    path('publicaciones/', views.PublicacionList.as_view(), name='publicacion_list'),
    path('publicaciones/<int:pk>/', views.PublicacionDetail.as_view(), name='publicacion_detail'),
]
