from django.contrib import admin

from django.contrib.auth import get_user_model
User=get_user_model()
from app.models import *
class  UserAdmin(admin.ModelAdmin):
    list_display=('first_name','mid_name','last_name','email')
    list_filter=('gender','city')
    search_fields=('first_name',)

admin.site.register(User,UserAdmin)



class InsuranceAdmin(admin.ModelAdmin):
    list_display=('veh_no','mno','email')
    list_filter=('veh_no',)


# Register your models here.
admin.site.register(insurance,InsuranceAdmin)

admin.site.site_header='Hass Admin Panel'