from django.contrib import admin
from .models import Publicacion

@admin.register(Publicacion)
class PublicacionAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo', 'fecha_publicacion', 'tipo_publicacion', 'categoria', 'usuario', 'grupo_investigacion')
    search_fields = ('titulo', 'tipo_publicacion', 'categoria', 'usuario__nombre', 'grupo_investigacion__nombre_grupo')
    list_filter = ('tipo_publicacion', 'categoria', 'fecha_publicacion', 'grupo_investigacion')
