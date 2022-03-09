# Generated by Django 4.0.2 on 2022-03-07 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizes', '0002_alter_quiz_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='number_of_questions',
            field=models.IntegerField(editable=False),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='required_score_to_pass',
            field=models.IntegerField(blank=True, editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='time',
            field=models.FloatField(editable=False, help_text='duration of the quiz in minutes'),
        ),
    ]