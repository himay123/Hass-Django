from django.urls import path
from . import views

urlpatterns = [
    path('',views.index_page,name='index'),
    path('master/',views.master_page,name='master'),
    path('register/',views.register_page,name='register'),
    path('login/',views.login_page,name='login'),
    path('rantal/',views.rantal_page,name='rantal'),
    path('towing/',views.towing_page,name='towing'),
    path('insurance/',views.insurance_page,name='insurance'),
    path('logout/',views.log_out,name='logout'),
    path('car_insurance/',views.car_insurance,name='c_insurance'),
    path('renew/',views.renew_page,name='renew'),
    path('insurance_master/',views.insurance_master_page,name='ins_master'),
    path('car_claim/',views.carclaim_page,name='c_claim'),
    path('contect/',views.contect_page,name='contect'),
    path('garage_list',views.garage_list_page,name='garage_list'),
    path('otp',views.policy_otp_page,name='otp_policy'),
    path('policyno',views.policy_no_page,name='policy_no'),
    path('get_city',views.get_city,name='get_city'),
    path('mainpage',views.head_page,name='head'),
    path('get_manufacture',views.get_manufacture,name='get_manufacture'),
    

]