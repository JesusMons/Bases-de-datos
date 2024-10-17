from rest_framework import serializers
from .models import Publicacion, Usuario, GrupoInvestigacion

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nombre', 'apellido', 'email', 'tipo_usuario']

class GrupoInvestigacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrupoInvestigacion
        fields = ['id', 'nombre_grupo', 'descripcion']

class PublicacionSerializer(serializers.ModelSerializer):
    # Usamos PrimaryKeyRelatedField para las relaciones
    usuario = serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.all())
    grupo_investigacion = serializers.PrimaryKeyRelatedField(queryset=GrupoInvestigacion.objects.all())

    class Meta:
        model = Publicacion
        fields = "__all__"
