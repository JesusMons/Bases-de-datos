from django.contrib import admin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'apellido', 'email', 'tipo_usuario', 'programa')
    search_fields = ('nombre', 'apellido', 'email')
    list_filter = ('tipo_usuario', 'programa')
