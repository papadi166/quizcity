# Generated by Django 4.0.4 on 2022-05-29 20:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0026_remove_favourites_favourites_item_favourites'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favourite',
            name='products',
        ),
        migrations.AddField(
            model_name='favourite',
            name='products',
            field=models.ManyToManyField(to='store.product'),
        ),
        migrations.AlterField(
            model_name='item',
            name='favourites',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.favourite'),
        ),
        migrations.DeleteModel(
            name='Favourites',
        ),
    ]
