# Generated by Django 4.0.4 on 2022-06-05 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizes', '0009_quiztaker_connected_users'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quiztaker',
            old_name='score',
            new_name='game_creator_score',
        ),
        migrations.AddField(
            model_name='quiztaker',
            name='game_opponent_score',
            field=models.IntegerField(default=0),
        ),
    ]
