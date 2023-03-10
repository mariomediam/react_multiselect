from django.db import models

# Create your models here.
class TestUserModel(models.Model):
    testUserId = models.AutoField(
        primary_key=True, null=False, db_column='testUserId', unique=True)

    testUserDni = models.CharField(max_length=8, null=True, db_column='testUserDni')

    testUserName = models.CharField(max_length=200, null=False, db_column='testUserName')

    class Meta:
        db_table = 'TestUser'
