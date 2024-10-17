from django.urls import path
from . import views

urlpatterns = [
    path('grupos/', views.GrupoInvestigacionList.as_view(), name='grupo_list'),
    path('grupos/<int:pk>/', views.GrupoInvestigacionDetail.as_view(), name='grupo_detail'),
]
