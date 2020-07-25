from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime,timedelta
#from django.contrib.auth import get_user_model
#User=get_user_model()
# Create your models here.
from six import python_2_unicode_compatible
from django.utils.safestring import mark_safe

class User(AbstractUser):
    city=models.CharField(max_length=20,null=True)
    state=models.CharField(max_length=20,null=True)
    mid_name=models.CharField(max_length=20,null=True)
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

class car(models.Model):
    year=models.CharField(max_length=5,null=True)
    make=models.CharField(max_length=40,null=True)
    model=models.CharField(max_length=40,null=True)
    price=models.IntegerField(null=True)

class branch(models.Model):
    branch_name=models.CharField(max_length=40)
    address=models.CharField(max_length=100)
    city=models.CharField(max_length=40)
    state=models.CharField(max_length=40)
    contect_no=models.BigIntegerField()
    location=models.ForeignKey(cites,on_delete=models.CASCADE,null=True)
    
class insurance(models.Model):
    veh_state=models.CharField(max_length=20,null=True)
    veh_code=models.CharField(max_length=5,null=True)
    veh_ser=models.CharField(max_length=2,null=True)
    veh_no=models.IntegerField(null=True)
    price=models.IntegerField(null=True)
    mobile=models.BigIntegerField(null=True)
    email=models.CharField(max_length=20,null=True)
    m_name=models.CharField(max_length=20,null=True)
    carmodel=models.CharField(max_length=20,null=True)
    city=models.CharField(max_length=20,null=True)
    date=models.DateField(auto_now_add=True,null=True)
    ex_date=models.DateTimeField(default=datetime.now()+timedelta(days=365))
    year=models.CharField(max_length=20,null=True)
    engine=models.CharField(max_length=20,null=True)
    chassis=models.CharField(max_length=20,null=True)
    seat=models.CharField(max_length=20,null=True)
    fuel=models.CharField(max_length=20,null=True)
    cc=models.IntegerField(null=True)
    
class claim(models.Model):
    policy_no=models.IntegerField()
    veh_no=models.CharField(max_length=5,null=True)
    mobile=models.BigIntegerField(null=True)
    email=models.CharField(max_length=20,null=True)
    m_name=models.CharField(max_length=20,null=True)
    date=models.DateField(auto_now_add=True,null=True)
    engine=models.CharField(max_length=20,null=True)
    chassis=models.CharField(max_length=20,null=True)
    seat=models.CharField(max_length=20,null=True)
    fuel=models.CharField(max_length=20,null=True)
    reason=models.CharField(max_length=20,null=True)
    usage=models.CharField(max_length=20,null=True)
    cc=models.IntegerField(null=True)
    proof=models.ImageField(upload_to='proof',null=True,blank=True)
    def image_tag4(self):
        if self.proof:
            return mark_safe('<img src="%s" style="width:120px;height:120px" />' % self.proof.url)
        else:
            return 'no image found'
    image_tag4.short_description='Image'
'''
User---customer
fname
lname
adress 

''' 
class plan_detail(models.Model):
    first_name=models.CharField(max_length=40)
    last_name=models.CharField(max_length=100)
    mobile=models.CharField(max_length=40)
    email=models.CharField(max_length=40,null=True)
    state=models.CharField(max_length=40)
    city=models.CharField(max_length=50)
    address=models.CharField(max_length=90)
    vehical_number=models.CharField(max_length=40)
    vehical_purchase_month=models.CharField(max_length=40,null=True)
    vehical_purchase_year=models.CharField(max_length=40,null=True)
    make=models.CharField(max_length=40)
    model=models.CharField(max_length=40)
    category=models.CharField(max_length=40)

class rto_code(models.Model):
    reg_no=models.CharField(max_length=40,null=True)
    place=models.CharField(max_length=50,null=True)
    state=models.CharField(max_length=40,null=True)


class vehical(models.Model):
    vehical_number=models.CharField(max_length=50)
    vehical_purchase_date=models.CharField(max_length=50)
    make=models.CharField(max_length=50)
    model=models.CharField(max_length=50)
    category=models.CharField(max_length=50)

class document(models.Model):
    make=models.CharField(max_length=50)
    model=models.CharField(max_length=50)
    #image=models.ImageField(upload_to='myimage')
    pic=models.ImageField(upload_to="profiles", null=True, blank=True)
    def image_tag3(self):
        if self.pic:
            return mark_safe('<img src="%s" style="width:120px;height:120px" />' % self.pic.url)
        else:
            return 'no image found'
    image_tag3.short_description='Image'
class ad(models.Model):
    email=models.CharField(max_length=80,null=True)
    make=models.CharField(max_length=50,null=True)
    model=models.CharField(max_length=50,null=True)
    picture=models.ImageField(upload_to="profiles",null=True)
    time_duration=models.CharField(max_length=70,null=True)
    price=models.CharField(max_length=80,null=True)
    km_price=models.CharField(max_length=90 ,null=True)
    def image_tag4(self):
        if self.picture:
            return mark_safe('<img src="%s" style="width:120px;height:120px" />' % self.picture.url)
        else:
            return 'no image found'
    image_tag4.short_description='Image'

class towing_plan_detail(models.Model):
    category=models.CharField(max_length=20,null=True)
    price=models.CharField(max_length=6,null=True)
    state=models.CharField(max_length=20,null=True)
    city=models.CharField(max_length=20,null=True)
    rto=models.CharField(max_length=20,null=True)
    number=models.IntegerField(null=True)
    month=models.CharField(max_length=20,null=True)
    year=models.CharField(max_length=20,null=True)
    date=models.DateTimeField(auto_now_add=True,null=True)
    make=models.CharField(max_length=20,null=True)
    model=models.CharField(max_length=20,null=True)
    series=models.CharField(max_length=20,null=True)
    email=models.CharField(max_length=50,null=True)


    
 
class document1(models.Model):
    time_duration=models.CharField(max_length=70)
    price=models.CharField(max_length=80)
    km_price=models.CharField(max_length=90)

class driverupdate(models.Model):
    picture=models.ImageField(upload_to="profiles", null=True, blank=True)
    picture1=models.ImageField(upload_to="profiles", null=True, blank=True)

    def image_tag(self):
        if self.picture:
            return mark_safe('<img src="%s" style="width:120px;height:120px" />' % self.picture.url)
        else:
            return 'no image found'
    image_tag.short_description='Image'
    def image_tag2(self):
        if self.picture1:
            return mark_safe('<img src="%s" style="width:120px;height:120px" />' % self.picture1.url)
        else:
            return 'no image found'
    image_tag2.short_description='Image'    
class rantal_search(models.Model):
    pick_up_city_name=models.CharField(max_length=60)
    drop_up_city_name=models.CharField(max_length=60,)
    pick_up_date_time=models.CharField(max_length=60,null=True)
    drop_up_date_time=models.CharField(max_length=60,null=True)
    make=models.CharField(max_length=70)

class towing_plan(models.Model):
    category=models.CharField(max_length=30,null=True)
    standerd=models.IntegerField(null=True)
    elite=models.IntegerField(null=True)

class rental_detail(models.Model):
    book_id=models.IntegerField(null=True)
    price=models.IntegerField(null=True)
    email=models.CharField(max_length=50,null=True)



class orderplace(models.Model):
    vehicalnumber=models.CharField(max_length=150)
    location=models.CharField(max_length=50000)
    gender=models.CharField(max_length=859)    