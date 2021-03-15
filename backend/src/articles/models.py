from django.db import models
from multiselectfield import MultiSelectField


class Article(models.Model):

    EXAM_CHOICES = (
        ('a', 'A'),
        ('b', 'B'),
        ('c', 'C'),
    )

    MULTI_CHOICES = (
        ('multi_a', 'Multi_A'),
        ('multi_b', 'Multi_B'),
        ('multi_c', 'Multi_C'),
        ('multi_d', 'Multi_D'),
    )

    title = models.CharField(max_length=120)
    content = models.TextField()
    radio = models.CharField(max_length=100, choices=EXAM_CHOICES, null=True)
    multicheck = MultiSelectField(choices=MULTI_CHOICES, null=True)

    def __str__(self):
        return self.title
