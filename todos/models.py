from django.db import models

from users.models import User


class Project(models.Model):
    STATUSES = (
        ('OPEN', 'открыт'),     # есть открытые туду
        ('DONE', 'сделан'),     # все туду закрыты
    )

    title = models.CharField(max_length=128)
    description = models.TextField()
    create_time = models.DateTimeField(auto_now_add=True)
    authors = models.ManyToManyField(User)
    status = models.CharField(choices=STATUSES, default='OPEN', max_length=4)


class ToDo(models.Model):
    STATUSES = (
        ('OPEN', 'открыт'),
        ('DONE', 'сделан'),
    )

    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=128)
    description = models.TextField()
    create_time = models.DateTimeField(auto_now_add=True)
    dead_line = models.DateTimeField()
    doers = models.ManyToManyField(User)
    status = models.CharField(choices=STATUSES, default='OPEN', max_length=4)
