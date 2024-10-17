from rest_framework import serializers
from .models import Usuario, Programa

class ProgramaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programa
        fields = "__all__"

class UsuarioSerializer(serializers.ModelSerializer):
    # Incluimos el campo programa como una relación primaria
    programa = serializers.PrimaryKeyRelatedField(queryset=Programa.objects.all())  

    class Meta:
        model = Usuario
        fields = "__all__"
