# Generated by Django 4.2.5 on 2023-09-14 18:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0003_rename_uuid_user_uid"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="phone_number",
            field=models.CharField(max_length=50),
        ),
    ]