from django.db import models
from ap.usuarios.models import Usuario  # Importar el modelo Usuario desde la app Usuarios
from ap.grupos_inves.models import GrupoInvestigacion  # Importar el modelo GrupoInvestigacion desde la app Grupos de Investigación

class Publicacion(models.Model):
    TIPO_PUBLICACION_CHOICES = [
        ('Artículo', 'Artículo'),
        ('Libro', 'Libro'),
    ]

    CATEGORIA_CHOICES = [
        ('Ciencia', 'Ciencia'),
        ('Tecnología', 'Tecnología'),
        ('Humanidades', 'Humanidades'),
    ]

    titulo = models.CharField(max_length=255)
    resumen = models.TextField()
    fecha_publicacion = models.DateField()
    tipo_publicacion = models.CharField(max_length=100, choices=TIPO_PUBLICACION_CHOICES)
    categoria = models.CharField(max_length=100, choices=CATEGORIA_CHOICES)
    palabras_clave = models.CharField(max_length=255)  # Palabras clave separadas por comas
    grupo_investigacion = models.ForeignKey(GrupoInvestigacion, on_delete=models.SET_NULL, null=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
