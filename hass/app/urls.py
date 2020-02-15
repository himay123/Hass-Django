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
    path('reg1/',views.reg_page,name='reg'),
    path('renew/',views.renew_page,name='renew'),
    
]