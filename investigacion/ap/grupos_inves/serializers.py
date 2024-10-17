from rest_framework import serializers
from .models import GrupoInvestigacion

class GrupoInvestigacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrupoInvestigacion
        fields = "__all__"
