from django.contrib import admin
from django.contrib.auth import get_user_model
# Register your models here.
User=get_user_model()
from app.models import *
class  UserAdmin(admin.ModelAdmin):
    list_display=('first_name','mid_name','last_name','gender','email')
    list_filter=('gender','city')
    search_fields=('first_name',)
    empty_value_display = '-empty-'
    list_display_links = ('first_name', 'last_name','email')


admin.site.register(User,UserAdmin)
#admin.site.register(get_user_model())
admin.site.site_header='Hass Admin Panel'

class garageadmin(admin.ModelAdmin):
    list_display=('dealer_name','address','contect_no','type_of_vehical','contect_person')
    list_filter=('city','state')
    empty_value_display = '-empty-'
class branchadmin(admin.ModelAdmin):
    list_display=('branch_name','address','city','state','contect_no')
    list_filter=('city','state')
    empty_value_display = '-empty-'
class insuranceadmin(admin.ModelAdmin):
    list_display=('veh_code','veh_ser','veh_no','price','mobile','email')
    list_filter=('m_name','carmodel','engine')
class in_claim(admin.ModelAdmin):
    list_display=('policy_no','veh_no','mobile','email','engine','fuel','image_tag4')
    list_filter=('seat','m_name','cc')
class plan_detailadmin(admin.ModelAdmin):
    list_display=('first_name','last_name','email','mobile','address','vehical_number')
    list_filter=('state','city','model')
class towing_plan_detailadmin(admin.ModelAdmin):
    list_display=('category','price','rto','number','email')
    list_filter=('state','city')
class vehicaladmin(admin.ModelAdmin):
    list_display=('vehical_number','vehical_purchase_date','make','model')
    list_filter=('category',)
class documentadmin(admin.ModelAdmin):
    list_display=('make','model','image_tag3')
    list_filter=('make',)
class adadmin(admin.ModelAdmin):
    list_display=('email','make','model','image_tag4')
    list_filter=('price','km_price')
class document1admin(admin.ModelAdmin):
    list_display=('price','km_price')
    list_filter=('km_price',)
class driverupdateadmin(admin.ModelAdmin):
    list_display=('image_tag','image_tag2')
class rantal_searchadmin(admin.ModelAdmin):
    list_display=('pick_up_city_name','drop_up_city_name','pick_up_date_time','drop_up_date_time')
    list_filter=('make',)
admin.site.register(Garage,garageadmin)
admin.site.register(branch,branchadmin)
admin.site.register(insurance,insuranceadmin)
admin.site.register(claim,in_claim)
admin.site.register(plan_detail,plan_detailadmin)
admin.site.register(towing_plan_detail,towing_plan_detailadmin)
admin.site.register(vehical,vehicaladmin)
admin.site.register(document,documentadmin)
admin.site.register(ad,adadmin)
admin.site.register(document1)
admin.site.register(driverupdate,driverupdateadmin)
admin.site.register(rantal_search,rantal_searchadmin)
