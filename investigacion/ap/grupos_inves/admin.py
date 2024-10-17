from django.contrib import admin
from .models import GrupoInvestigacion

@admin.register(GrupoInvestigacion)
class GrupoInvestigacionAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_grupo', 'descripcion')
    search_fields = ('nombre_grupo',)
