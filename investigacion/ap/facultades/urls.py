from django.urls import path
from . import views

urlpatterns = [
    path('facultades/', views.FacultadList.as_view(), name='facultad_list'),
    path('facultades/<int:pk>/', views.FacultadDetail.as_view(), name='facultad_detail'),
    path('programas/', views.ProgramaList.as_view(), name='programa_list'),
    path('programas/<int:pk>/', views.ProgramaDetail.as_view(), name='programa_detail'),
]
