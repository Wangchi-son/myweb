# Generated by Django 3.1.7 on 2021-03-15 12:38

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='multicheck',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('multi_a', 'Multi_A'), ('multi_b', 'Multi_B'), ('multi_c', 'Multi_C'), ('multi_d', 'Multi_D')], max_length=31, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='radio',
            field=models.CharField(choices=[('a', 'A'), ('b', 'B'), ('c', 'C')], max_length=100, null=True),
        ),
    ]
