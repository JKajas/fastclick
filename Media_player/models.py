from django.db import models

# Create your models here.

class song(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    image = models.ImageField(blank=True, null=True)
    audio_file = models.FileField()

    def __str__(self):
        return self.title