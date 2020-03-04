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
    path('select_plan',views.select_plan_page,name='select_plan'),
    path('plan_detail',views.paln_detail_page,name='plan_detail'),
    path('expert_blog',views.expert_blog_page,name='expert_blog'),
    path('insurance_info',views.insurance_information_page,name='insurance_info'),
    path('car_info',views.car_insurance_information_page,name='car_info'),
    path('car_act',views.car_act_page,name='car_act'),
    path('parking_tips',views.parking_tips_page,name='parking_tips'),
    path('micro_dot',views.microdot_page,name='micro_dot'),
    path('thired_party_detail',views.thired_party_detail_page,name='thired_party_detail'),
    path('new_rules',views.new_rules_page,name='new_rules'),
    path('tuch_less',views.tuch_less_page,name='tuch_less'),
    

]