# Generated by Django 4.2.5 on 2023-09-14 17:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="uuid",
            field=models.UUIDField(default=1),
            preserve_default=False,
        ),
    ]
