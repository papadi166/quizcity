# Generated by Django 4.0.4 on 2022-05-29 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0019_alter_favourites_products'),
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