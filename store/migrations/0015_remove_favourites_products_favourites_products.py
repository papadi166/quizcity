# Generated by Django 4.0.4 on 2022-05-29 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0014_favourites'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favourites',
            name='products',
        ),
        migrations.AddField(
            model_name='favourites',
            name='products',
            field=models.ManyToManyField(to='store.product'),
        ),
    ]
