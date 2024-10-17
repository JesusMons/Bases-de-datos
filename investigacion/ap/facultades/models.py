from django.db import models

class Facultad(models.Model):
    nombre_facultad = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre_facultad

class Programa(models.Model):
    nombre_programa = models.CharField(max_length=255)
    facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre_programa