from django.contrib import admin
from .models import Facultad, Programa

@admin.register(Facultad)
class FacultadAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_facultad')
    search_fields = ('nombre_facultad',)

@admin.register(Programa)
class ProgramaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_programa', 'facultad')
    search_fields = ('nombre_programa', 'facultad__nombre_facultad')
    list_filter = ('facultad',)
