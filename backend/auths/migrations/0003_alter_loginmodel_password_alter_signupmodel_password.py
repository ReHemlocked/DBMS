# Generated by Django 4.2.6 on 2023-11-05 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auths', '0002_alter_signupmodel_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loginmodel',
            name='password',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='signupmodel',
            name='password',
            field=models.CharField(max_length=256),
        ),
    ]
