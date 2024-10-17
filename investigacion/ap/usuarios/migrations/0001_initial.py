# Generated by Django 5.1.2 on 2024-10-16 16:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('facultades', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('tipo_usuario', models.CharField(choices=[('Estudiante', 'Estudiante'), ('Docente', 'Docente'), ('Investigador', 'Investigador')], max_length=50)),
                ('programa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='facultades.programa')),
            ],
        ),
    ]
