# Generated by Django 4.0.4 on 2022-05-29 19:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0022_remove_favourite_user_favourite_favourites'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favourite',
            name='favourites',
        ),
        migrations.AddField(
            model_name='favourites',
            name='favourites',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='store.favourite'),
        ),
    ]