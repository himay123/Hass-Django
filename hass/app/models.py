from django.db import models
from django.contrib.auth.models import AbstractUser
#from django.contrib.auth import get_user_model
#User=get_user_model()
# Create your models here.
class User(AbstractUser):
    mobile=models.BigIntegerField(null=True)
    dob=models.CharField(max_length=10,null=True)
    gen=(('male','male'),('female','female'))
    gender=models.CharField(max_length=6,choices=gen,default='male')
    address=models.CharField(max_length=30)
    
'''class document(models.Model):
    image=models.ImageField(upload_to='myimage')
    uploaded_by=models.ForeignKey(get_user_model(),on_delete=models.CASCADE)'''
class cites(models.Model):
    city_name=models.CharField(max_length=40)
    city_state=models.CharField(max_length=40)
    

class Garage(models.Model):
    dealer_name=models.CharField(max_length=40)
    address=models.CharField(max_length=100)
    city=models.CharField(max_length=40)
    state=models.CharField(max_length=40)
    contect_no=models.BigIntegerField()
    contect_person=models.CharField(max_length=40)
    type_of_vehical=models.CharField(max_length=40)
    manufacture=models.CharField(max_length=100)
    location=models.ForeignKey(cites,on_delete=models.CASCADE,null=True)

    
    
    

