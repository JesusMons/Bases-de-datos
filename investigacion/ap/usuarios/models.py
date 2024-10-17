from django.db import models
from ap.facultades.models import Programa  # Importar el modelo Programa desde la app Facultades

class Usuario(models.Model):
    TIPO_USUARIO_CHOICES = [
        ('Estudiante', 'Estudiante'),
        ('Docente', 'Docente'),
        ('Investigador', 'Investigador'),
    ]

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    tipo_usuario = models.CharField(max_length=50, choices=TIPO_USUARIO_CHOICES)
    programa = models.ForeignKey(Programa, on_delete=models.SET_NULL, null=True)  # Relación con Programa

    def __str__(self):
        return f"{self.nombre} {self.apellido}"
