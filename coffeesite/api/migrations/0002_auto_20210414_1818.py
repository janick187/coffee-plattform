# Generated by Django 3.1.3 on 2021-04-14 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offer',
            name='quantity',
            field=models.CharField(max_length=2),
        ),
        migrations.AlterField(
            model_name='offer',
            name='type',
            field=models.CharField(max_length=50),
        ),
    ]
