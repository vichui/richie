# Generated by Django 3.2.15 on 2022-10-05 07:31

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("lti_consumer", "0002_auto_20210603_1817"),
    ]

    operations = [
        migrations.AlterField(
            model_name="lticonsumer",
            name="inline_ratio",
            field=models.FloatField(
                blank=True,
                help_text="Enforce the aspect ratio of the LTI viewport. e.g: if you want to display a video with 4:3 landscape format, the value will be 0.75 (3 / 4 = 0.75). Leave blank to use the default value of the selected LTI provider if there is.",
                null=True,
                validators=[
                    django.core.validators.MinValueValidator(0.1),
                    django.core.validators.MaxValueValidator(10),
                ],
            ),
        ),
        migrations.AlterField(
            model_name="lticonsumer",
            name="is_automatic_resizing",
            field=models.BooleanField(
                blank=True,
                choices=[(None, "Inherit"), (True, "Yes"), (False, "No")],
                help_text="If active, the LTI viewport will automatically fit its content. Leave blank to use the default value of the selected LTI provider if there is.",
                null=True,
            ),
        ),
    ]
