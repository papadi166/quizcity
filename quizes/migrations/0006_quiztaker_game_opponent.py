# Generated by Django 4.0.2 on 2022-04-05 18:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('quizes', '0005_remove_quiztaker_game_opponent'),
    ]

    operations = [
        migrations.AddField(
            model_name='quiztaker',
            name='game_opponent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='opponent', to=settings.AUTH_USER_MODEL),
        ),
    ]
