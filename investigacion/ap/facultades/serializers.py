from rest_framework import serializers
from .models import Programa, Facultad

class FacultadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facultad
        fields = "__all__"

class ProgramaSerializer(serializers.ModelSerializer):
    # En lugar de mostrar el nombre de la facultad, permitimos seleccionar su id
    facultad = serializers.PrimaryKeyRelatedField(queryset=Facultad.objects.all()) 

    class Meta:
        model = Programa
        fields = "__all__"
